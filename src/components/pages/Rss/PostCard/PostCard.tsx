import dayjs from "dayjs";
import type { Item } from "types/rss/rssApi";
import { TIME_FORMAT_DATE_AND_MINUTE } from "utils/constants/dates";
import {
  Author,
  BlogTitle,
  Container,
  Description,
  Meta,
  Title,
  WrittenAt,
} from "./PostCard.style";

interface Props {
  feed: Item;
}

const PostCard = ({ feed }: Props) => {
  const content = feed["content:encoded"] || feed.content;

  return (
    <Container>
      <Meta>
        <BlogTitle>{feed.blogTitle}</BlogTitle>
        {feed.author && <Author>{feed.author}</Author>}
        <WrittenAt>
          {dayjs(feed.isoDate).format(TIME_FORMAT_DATE_AND_MINUTE)}
        </WrittenAt>
      </Meta>
      <Title>
        <a href={feed.link} target="_blank" rel="noreferrer">
          {feed.title}
        </a>
      </Title>
      <Description>
        <a href={feed.link} target="_blank" rel="noreferrer">
          {content}
        </a>
      </Description>
    </Container>
  );
};

export default PostCard;
