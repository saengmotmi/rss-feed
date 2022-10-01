import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  a:link {
    color: red;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: blue;
  }

  > ul {
    display: flex;
    gap: 16px;
    padding: 0;
  }

  li {
    list-style: none;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);

    &.selected {
      color: rgba(0, 0, 0, 1);
      text-decoration: underline;
    }
  }
`;
