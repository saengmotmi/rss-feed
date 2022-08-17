import { useState, useMemo, useEffect, useLayoutEffect } from "react";
import Pagination from "components/components/Pagination/Pagination";
import type { Item } from "types/rss/rssApi";
import PostCard from "./PostCard/PostCard";
import { Container, Feeds, SectionTitle } from "./Rss.style";
import SearchInput from "./SearchInput/SearchInput";
import { useRouter } from "next/router";

const CONTENTS_PER_PAGE = 10;

interface Props {
  feeds: Item[];
}

const Rss = ({ feeds }: Props) => {
  const { query } = useRouter();
  const [page, setPage] = useState(1);
  const offset = page - 1;

  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);

  useLayoutEffect(() => {
    setPage(Number(query.page) || 1);
  }, [query.page]);

  const paginatedFeeds = useMemo(
    () =>
      feeds.slice(
        offset * CONTENTS_PER_PAGE,
        offset * CONTENTS_PER_PAGE + CONTENTS_PER_PAGE
      ),
    [feeds, offset]
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
