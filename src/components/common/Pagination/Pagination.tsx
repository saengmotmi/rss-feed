import Link from "next/link";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

import type { SetStateType } from "types/utils";
import { Container } from "./Pagination.style";

interface Props {
  setPage: SetStateType<number>;
  contentsPerPage: number;
  data: any[];
}

const Pagination = ({ data, setPage, contentsPerPage }: Props) => {
  const { query, pathname } = useRouter();

  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={({ selected }) => setPage(selected)}
        pageRangeDisplayed={contentsPerPage}
        pageCount={Math.ceil(data.length / contentsPerPage)}
        previousLabel="<"
        pageLabelBuilder={(page) => (
          <Link href={{ pathname, query: { page } }} passHref>
            <li className={page == Number(query.page) ? "selected" : ""}>
              {String(page)}
            </li>
          </Link>
        )}
      />
    </Container>
  );
};

export default Pagination;
