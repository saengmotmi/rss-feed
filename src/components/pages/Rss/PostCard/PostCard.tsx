import dayjs from "dayjs";
import Link from "next/link";
import type { Item } from "types/rss/rssApi";
import { TIME_FORMAT_DATE_AND_MINUTE } from "utils/constants/dates";
import { FILTER_TAGS_REGEX } from "utils/constants/regex";
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
      <Link href={feed.link} passHref>
        <Title>
          <a target="_blank">{feed.title}</a>
        </Title>
      </Link>
      <Link href={feed.link} passHref>
        <Description>{content}</Description>
      </Link>
    </Container>
  );
};

export default PostCard;
