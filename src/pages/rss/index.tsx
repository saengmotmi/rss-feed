import type { NextPage } from "next";
import RssView from "components/pages/Rss/Rss";
import Parser from "rss-parser";
import type { Feed, Item } from "types/rss/rssApi";
import dayjs from "dayjs";
import Layout from "components/components/Layout/Layout";
import { FILTER_TAGS_REGEX } from "utils/constants/regex";

const parser = new Parser();

interface Props {
  feeds: Item[];
}

const Rss: NextPage<Props> = ({ feeds }) => {
  return (
    <Layout>
      <RssView feeds={feeds} />
    </Layout>
  );
};

export default Rss;

const BLOG_LIST = [
  "https://v2.velog.io/rss/teo", // teo
  "https://wormwlrm.github.io/feed.xml", // 재그지그
  "https://so-so.dev/rss.xml", // 이소영
  "https://jbee.io/rss.xml", // 한재엽
  "https://evan-moon.github.io/feed.xml", // 문동욱
  "https://ahnheejong.name/feed.xml", // 안희종
  "https://medium.com/feed/@euncho", // 조은
  "https://medium.com/feed/@yujso66", // 번역 블로그
  "https://junghan92.medium.com/feed", // 번역 블로그
  // "https://jojoldu.tistory.com/feed", // 향로
  // 지인
  "https://rss.blog.naver.com/dong_dh.xml", // 김동희님
  "https://emewjin.github.io/rss.xml", // 임유진님
];

export const getStaticProps = async () => {
  const feeds = (await Promise.all(
    BLOG_LIST.map((url) => parser.parseURL(url))
  )) as Feed[];

  return { props: { feeds: formatFeeds(feeds) } };
};

const formatFeeds = (feeds: Feed[]) => {
  return feeds
    .flatMap((f) =>
      f.items.map((i) => ({
        ...i,
        // JSON 크기 제한
        content: limitStrLength(i.content ?? ""),
        contentSnippet: limitStrLength(i.contentSnippet ?? ""),
        "content:encoded": limitStrLength(i["content:encoded"] ?? ""),
        "content:encodedSnippet": limitStrLength(
          i["content:encodedSnippet"] ?? ""
        ),
        blogTitle: f.title,
      }))
    )
    .sort((a, b) => (dayjs(a.isoDate).isBefore(dayjs(b.isoDate)) ? 1 : -1))
    .filter((_, i) => i < 30);
};

const limitStrLength = (str: string, limit = 300) => {
  return str?.replaceAll(FILTER_TAGS_REGEX, "").substring(0, limit) || "";
};
