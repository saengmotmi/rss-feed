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
    .flatMap((feed) =>
      feed.items
        .filter((feed) => feed.title !== "No title")
        .map((item) => {
          return {
            ...item,
            // JSON 크기 제한
            content: limitStrLength(item?.content ?? ""),
            contentSnippet: limitStrLength(item?.contentSnippet ?? ""),
            "content:encoded": limitStrLength(item["content:encoded"] ?? ""),
            "content:encodedSnippet": limitStrLength(
              item["content:encodedSnippet"] ?? ""
            ),
            blogTitle: feed.title,
            image: feed.image ?? {
              link: "",
              url: "",
              title: "",
            },
            thumbnailImage: getThumbnailImage(item),
          };
        })
    )
    .sort((a, b) => (dayjs(a.isoDate).isBefore(dayjs(b.isoDate)) ? 1 : -1))
    .filter((_, i) => i < 100);
};

export const limitStrLength = (str: string, limit = 300) => {
  return str?.replaceAll(FILTER_TAGS_REGEX, "").substring(0, limit) || "";
};

const getThumbnailImage = (item: Item) => {
  const dom = new JSDOM(item.content ?? item.contentSnippet ?? "");

  let imageUrl =
    dom.window.document.querySelector("img")?.getAttribute("src") ?? "";

  const isRelativeUrl = imageUrl && item.link && !imageUrl.includes("http");
  if (isRelativeUrl) {
    try {
      const url = new URL(item.link ?? "");
      imageUrl = url.origin + imageUrl;
    } catch (error) {
      console.log(error);
    }
  }

  return imageUrl;
};
