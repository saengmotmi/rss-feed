import { BLOG_LIST } from "components/pages/Rss/Rss.constant";
import { formatFeeds, parser } from "components/pages/Rss/utils";
import type { Feed } from "types/rss/rssApi";
import { isFulfilled } from "types/utils";
import { isProduction, limitArray } from "utils";

const PAGE_LIMIT = 10;

export const getFeeds = async () => {
  const blogs = (isProduction ? BLOG_LIST : limitArray(BLOG_LIST, 3)).map(
    (blog) => blog.url
  );
  const result = await Promise.allSettled(
    blogs.map((url) => getBlogWithTimeout(url, 3 * 1000))
  );

  return limitArray(
    formatFeeds(result.filter(isFulfilled).map((feed) => feed.value)),
    3 * PAGE_LIMIT
  );
};

const getBlogWithTimeout = (url: string, delay: number) => {
  return new Promise<Feed>((resolve, reject) => {
    let data: Feed | undefined;

    setTimeout(() => {
      if (!data) {
        console.log("reject", { url });
        reject("timeout");
      }
    }, delay);

    // TODO: head 요청으로 content-length만 먼저 떼올 수 있는 방법 있는지 체크
    return parser.parseURL(url).then((res) => {
      console.log("resolve", { url });
      data = res;
      resolve(res);
    });
  });
};
