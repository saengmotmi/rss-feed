import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { CONTENTS_PER_PAGE, RssProps } from "../Rss";

interface Props {
  data: RssProps["feeds"];
}

const usePaginatedPage = ({ data: feeds }: Props) => {
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
      feeds.slice(
        offset * CONTENTS_PER_PAGE,
        offset * CONTENTS_PER_PAGE + CONTENTS_PER_PAGE
      ),
    [feeds, offset]
  );

  return { feeds: paginatedFeeds, setPage };
};

export default usePaginatedPage;
