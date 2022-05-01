import styled from "styled-components";
import { BREAK_POINT } from "styles/mediaQuery";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  z-index: 1000;
  backdrop-filter: saturate(180%) blur(20px);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${BREAK_POINT.DESKTOP}px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const UserArea = styled.div``;
