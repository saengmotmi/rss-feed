import { useState, useMemo } from "react";
import Pagination from "components/components/Pagination/Pagination";
import type { Item } from "types/rss/rssApi";
import PostCard from "./PostCard/PostCard";
import { Container, Feeds, SectionTitle } from "./Rss.style";
import SearchInput from "./SearchInput/SearchInput";

const CONTENTS_PER_PAGE = 10;
type a = React.FormEvent<HTMLInputElement>;
interface Props {
  feeds: Item[];
}

const Rss = ({ feeds }: Props) => {
  const [page, setPage] = useState(0);

  const paginatedFeeds = useMemo(
    () =>
      feeds.slice(
        page * CONTENTS_PER_PAGE,
        page * CONTENTS_PER_PAGE + CONTENTS_PER_PAGE
      ),
    [feeds, page]
  );

  return (
    <Container>
      <SearchInput />
      <div>
        <SectionTitle>기술 포스트</SectionTitle>
        <Feeds>
          {paginatedFeeds.map((feed) => (
            <PostCard key={feed.guid} feed={feed} />
          ))}
        </Feeds>
      </div>

      <Pagination
        setPage={setPage}
        contentsPerPage={CONTENTS_PER_PAGE}
        data={feeds}
      />
    </Container>
  );
};

export default Rss;
