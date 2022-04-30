import ImageWithFallback from "components/components/ImageWithFallback/ImageWithFallback";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  box-shadow: 10px -8px 0px rgb(253 230 138);
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    margin: 0;
    display: flex;
    gap: 8px;

    :not(:last-child)::after {
      content: "·";
    }
  }
`;

export const Title = styled.h3`
  a {
    all: unset;
    cursor: pointer;
  }
`;

export const BlogTitle = styled.p`
  color: rgba(117, 117, 117, 1);
  font-size: 13px;
`;

export const WrittenAt = styled.p`
  color: rgba(117, 117, 117, 1);
  font-size: 13px;
`;

export const Author = styled.p`
  color: rgba(117, 117, 117, 1);
  font-size: 13px;
`;

export const Description = styled.p`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.66;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: pointer;

  a {
    all: unset;
    cursor: pointer;
  }
`;

export const Image = styled(ImageWithFallback)`
  border-radius: 50%;
`;
