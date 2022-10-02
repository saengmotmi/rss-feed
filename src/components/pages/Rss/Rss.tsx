import { useQuery } from "@tanstack/react-query";

import Pagination from "components/common/Pagination/Pagination";
import { getFeeds } from "services/rss/feeds";

import SearchInput from "./SearchInput/SearchInput";
import usePaginatedPage from "./hooks/usePaginatedPage";
import { Container, Feeds } from "./Rss.style";

import FeedHeader from "./FeedHeader";
import FeedCard from "./FeedCard";

export const CONTENTS_PER_PAGE = 10;

const Rss = () => {
  const { data: feedsFromServer = [] } = useQuery(["feeds"], getFeeds, {
    staleTime: Infinity,
  });

  const { feeds, setPage } = usePaginatedPage({
    items: feedsFromServer,
  });

  return (
    <Container>
      <SearchInput />
      <div>
        <FeedHeader />
        <Feeds>
          {feeds.map((feed) => {
            return <FeedCard key={feed.guid} feed={feed} />;
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
