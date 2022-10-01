import type { NextPage } from "next";

import RssView from "components/pages/Rss/Rss";
import Layout from "components/components/Layout/Layout";
import { BLOG_LIST } from "components/pages/Rss/Rss.constant";
import { formatFeeds, parser } from "components/pages/Rss/utils";
import type { Feed, Item } from "types/rss/rssApi";
import { limitArray, isProduction } from "utils";

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

export const getStaticProps = async () => {
  const blogs = isProduction ? BLOG_LIST : limitArray(BLOG_LIST, 3);

  const feeds = (await Promise.all(
    blogs.map((url) => parser.parseURL(url))
  )) as Feed[];

  return {
    props: { feeds: formatFeeds(feeds) },
    revalidate: 60 * 60 * 3 /* 3 hours */,
  };
};
