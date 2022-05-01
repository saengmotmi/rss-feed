import styled from "styled-components";
import { BREAK_POINT } from "styles/mediaQuery";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  z-index: 1000;
  backdrop-filter: saturate(180%) blur(20px);
`;

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${BREAK_POINT.DESKTOP}px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const UserArea = styled.div``;
