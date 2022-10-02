import dayjs from "dayjs";
import Parser from "rss-parser";

import { FILTER_TAGS_REGEX } from "utils/constants/regex";
import type { AdditionalItemProperties, Feed } from "types/rss/rssApi";

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
        .map((i) => ({
          ...i,
          // JSON 크기 제한
          content: limitStrLength(i?.content ?? ""),
          contentSnippet: limitStrLength(i?.contentSnippet ?? ""),
          "content:encoded": limitStrLength(i["content:encoded"] ?? ""),
          "content:encodedSnippet": limitStrLength(
            i["content:encodedSnippet"] ?? ""
          ),
          blogTitle: f.title,
          image: f?.image || {
            url: "",
            link: "",
            title: "",
          },
        }))
    )
    .sort((a, b) => (dayjs(a.isoDate).isBefore(dayjs(b.isoDate)) ? 1 : -1))
    .filter((_, i) => i < 100);
};

export const limitStrLength = (str: string, limit = 300) => {
  return str?.replaceAll(FILTER_TAGS_REGEX, "").substring(0, limit) || "";
};
