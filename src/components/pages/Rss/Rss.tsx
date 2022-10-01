import { useQuery } from "react-query";

import Pagination from "components/components/Pagination/Pagination";
import { getFeeds } from "services/rss/feeds";

import PostCard from "./PostCard/PostCard";
import SearchInput from "./SearchInput/SearchInput";
import usePaginatedPage from "./hooks/usePaginatedPage";
import { Container, Feeds, SectionTitle } from "./Rss.style";

export const CONTENTS_PER_PAGE = 10;

const Rss = () => {
  const { data: feedsFromServer = [] } = useQuery(["feeds"], getFeeds);

  const { feeds, setPage } = usePaginatedPage({
    items: feedsFromServer,
  });

  return (
    <Container>
      <SearchInput />
      <div>
        <SectionTitle>기술 포스트</SectionTitle>
        <Feeds>
          {feeds.map((feed, idx) => (
            <PostCard key={feed.guid ?? "" + idx} feed={feed} />
          ))}
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
