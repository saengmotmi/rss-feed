import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Feeds = styled.div`
  display: flex;
  flex-direction: column;

  :not(:first-child) {
    gap: 24px;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 20px 0;
`;
