import type { NextPage } from "next";

import RssView from "components/pages/Rss/Rss";
import Layout from "components/components/Layout/Layout";
import { getFeeds } from "services/rss/feeds";
import { dehydrate, QueryClient } from "react-query";

const Rss: NextPage = () => {
  return (
    <Layout>
      <RssView />
    </Layout>
  );
};

export default Rss;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["feeds"], getFeeds);

  return {
    props: {
      revalidate: 60 * 60 * 3 /* ISR 3 hours */,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
