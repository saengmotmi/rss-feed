import styled from "styled-components";

export const Suggestions = styled.div`
  display: none;
  position: absolute;
  padding: 0 20px 5px;
  width: calc(100% + 2px);
  top: 35px;
  left: -1px;
  background-color: #ffffff;
  border: 1px solid #5f6368;
  border-top: none;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  z-index: 100;
`;

export const Suggestion = styled.p`
  a {
    all: unset;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Container = styled.form`
  position: relative;
  padding: 10px 15px;
  display: flex;
  gap: 13px;
  background-color: #ffffff;
  border: 1px solid #5f6368;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  :focus-within {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    ${Suggestions} {
      display: block;
    }
  }
`;

export const SearchInputWrapper = styled.div``;

export const Input = styled.input`
  all: unset;
  display: inline-block;
  width: 100%;
`;
