import type { NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import RssView from "components/pages/Rss/Rss";
import { getFeeds } from "services/rss/feeds";

const Rss: NextPage = () => {
  return <RssView />;
};

export default Rss;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["feeds"], getFeeds);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    // revalidate: 60 * 60 * 3 /* ISR 3 hours */,
    revalidate: 100 /* ISR 1 second */,
  };
};
