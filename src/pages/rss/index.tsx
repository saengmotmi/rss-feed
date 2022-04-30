import type { NextPage } from "next";
import RssView from "components/pages/Rss/Rss";
import Layout from "components/components/Layout/Layout";
import { BLOG_LIST } from "components/pages/Rss/Rss.constant";
import { formatFeeds, parser } from "components/pages/Rss/utils";
import type { Feed, Item } from "types/rss/rssApi";

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
  const feeds = (await Promise.all(
    BLOG_LIST.map((url) => parser.parseURL(url))
  )) as Feed[];

  return { props: { feeds: formatFeeds(feeds) } };
};
