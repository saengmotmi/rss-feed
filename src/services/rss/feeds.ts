import { BLOG_LIST } from "components/pages/Rss/Rss.constant";
import { formatFeeds, parser } from "components/pages/Rss/utils";
import { isProduction, limitArray } from "utils";

export const getFeeds = async () => {
  const blogs = (isProduction ? BLOG_LIST : limitArray(BLOG_LIST, 3)).map(
    (blog) => blog.url
  );
  let feeds;
  try {
    feeds = await Promise.all(blogs.map((url) => parser.parseURL(url)));
    console.log({ feeds: JSON.stringify(feeds) });
  } catch (error) {
    console.log({ error });
  }

  return formatFeeds(feeds as any);
};
