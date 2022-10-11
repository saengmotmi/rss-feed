import { useQueryClient } from "@tanstack/react-query";

import SearchInput from "./SearchInput/SearchInput";
import usePaginatedPage from "./hooks/usePaginatedPage";
import { Container, Feeds } from "./Rss.style";
import FeedHeader from "./FeedHeader";
import FeedCard from "./FeedCard";
import { Feed } from "types/rss/rssApi";
import dynamic from "next/dynamic";

const Pagination = dynamic(
  () => import("components/common/Pagination/Pagination"),
  {
    ssr: false,
  }
);

export const CONTENTS_PER_PAGE = 10;

const Rss = () => {
  const cache = useQueryClient();
  const feedsFromServer = cache.getQueryData<Feed[]>(["feeds"]) || [];

  const { feeds, setPage } = usePaginatedPage({
    items: feedsFromServer,
  });

  return (
    <Container>
      <SearchInput />
      <div>
        <FeedHeader />
        <Feeds>
          {feeds.map((feed, index) => {
            return <FeedCard key={feed.guid ?? "" + index} feed={feed} />;
          })}
        </Feeds>
      </div>
      <Pagination
        setPage={setPage}
        contentsPerPage={CONTENTS_PER_PAGE}
        data={feedsFromServer}
      />
    </Container>
  );
};

export default Rss;
