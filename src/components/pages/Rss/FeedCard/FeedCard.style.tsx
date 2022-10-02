import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.08);
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;

  a {
    all: unset;
    cursor: pointer;
  }
`;

export const BlogTitle = styled.p`
  margin: 0;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;

  display: flex;
  align-items: center;

  color: #424242;

  line-height: 1.66;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const BlogContent = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #8c8c8c;

  line-height: 1.66;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const Thumbnail = styled.div`
  min-width: 80px;
  height: 80px;

  background: #e0e0e0;
  border-radius: 10px;
`;

export const WrittenAt = styled.p`
  color: rgba(117, 117, 117, 1);
  font-size: 13px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;

  display: flex;
  align-items: center;

  color: #646464;
`;

export const Author = styled.p`
  color: rgba(117, 117, 117, 1);
  font-size: 13px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 19px;

  display: flex;
  align-items: center;

  color: #646464;
`;
