import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  > ul {
    display: flex;
    gap: 16px;
    padding: 0;
  }

  li {
    list-style: none;
    cursor: pointer;
  }
`;
