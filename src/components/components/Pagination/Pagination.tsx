import ReactPaginate from "react-paginate";
import type { SetStateType } from "types/utils";
import { Container } from "./Pagination.style";

interface Props {
  setPage: SetStateType<number>;
  contentsPerPage: number;
  data: any[];
}

const Pagination = ({ data, setPage, contentsPerPage }: Props) => {
  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={({ selected }) => setPage(selected)}
        pageRangeDisplayed={contentsPerPage}
        pageCount={Math.ceil(data.length / contentsPerPage)}
        previousLabel="<"
      />
    </Container>
  );
};

export default Pagination;
