import dayjs from "dayjs";
import Parser from "rss-parser";

import { FILTER_TAGS_REGEX } from "utils/constants/regex";
import type { AdditionalItemProperties, Feed, Item } from "types/rss/rssApi";

const { JSDOM } = require("jsdom");

export const parser = new Parser<AdditionalItemProperties>({
  headers: {
    Accept: "application/rss+xml, application/xml, application/atom+xml",
  },
});

export const formatFeeds = (feeds: Feed[]) => {
  return feeds
    .flatMap((f) =>
      f.items
        .filter((f) => f.title !== "No title")
        .map((i) => {
          return {
            ...i,
            // JSON 크기 제한
            content: limitStrLength(i?.content ?? ""),
            contentSnippet: limitStrLength(i?.contentSnippet ?? ""),
            "content:encoded": limitStrLength(i["content:encoded"] ?? ""),
            "content:encodedSnippet": limitStrLength(
              i["content:encodedSnippet"] ?? ""
            ),
            blogTitle: f.title,
            image: f.image ?? {
              link: "",
              url: "",
              title: "",
            },
            thumbnailImage: getThumbnailImage(f, i),
          };
        })
    )
    .sort((a, b) => (dayjs(a.isoDate).isBefore(dayjs(b.isoDate)) ? 1 : -1))
    .filter((_, i) => i < 100);
};

export const limitStrLength = (str: string, limit = 300) => {
  return str?.replaceAll(FILTER_TAGS_REGEX, "").substring(0, limit) || "";
};

const getThumbnailImage = (feed: Feed, item: Item) => {
  if (feed.image) {
    return feed.image;
  }
  const dom = new JSDOM(item.content ?? item.contentSnippet ?? "");
  return dom.window.document.querySelector("img")?.getAttribute("src") ?? "";
};
