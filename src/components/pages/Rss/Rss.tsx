import Pagination from "components/components/Pagination/Pagination";
import type { Item } from "types/rss/rssApi";

import PostCard from "./PostCard/PostCard";
import SearchInput from "./SearchInput/SearchInput";
import { Container, Feeds, SectionTitle } from "./Rss.style";
import usePaginatedPage from "./hooks/usePaginatedPage";

export const CONTENTS_PER_PAGE = 10;

export interface RssProps {
  feeds: Item[];
}

const Rss = ({ feeds: feedsFromServer }: RssProps) => {
  const { feeds, setPage } = usePaginatedPage({
    data: feedsFromServer,
  });

  return (
    <Container>
      <SearchInput />
      <div>
        <SectionTitle>기술 포스트</SectionTitle>
        <Feeds>
          {feeds.map((feed, idx) => (
            <PostCard key={feed.guid + idx} feed={feed} />
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
