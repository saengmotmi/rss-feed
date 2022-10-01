import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import type { Item } from "rss-parser";

import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import { CONTENTS_PER_PAGE } from "../Rss";

interface Props {
  items: Item[];
}

const usePaginatedPage = ({ items }: Props) => {
  const { query } = useRouter();
  const [page, setPage] = useState(1);
  const offset = page - 1;

  useEffect(() => {
    scrollTo(0, 0);
  }, [page]);

  useIsomorphicLayoutEffect(() => {
    setPage(Number(query.page) || 1);
  }, [query.page]);

  const paginatedFeeds = useMemo(
    () =>
      items.slice(
        offset * CONTENTS_PER_PAGE,
        offset * CONTENTS_PER_PAGE + CONTENTS_PER_PAGE
      ),
    [items, offset]
  );

  return { feeds: paginatedFeeds, setPage };
};

export default usePaginatedPage;
