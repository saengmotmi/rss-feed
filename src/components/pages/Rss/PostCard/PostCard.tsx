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
  Image,
} from "./PostCard.style";

interface Props {
  feed: Item;
}

const PostCard = ({ feed }: Props) => {
  const content = feed["content:encoded"] || feed.content;

  return (
    <Container>
      <Meta>
        {feed.image?.url ? (
          <Image
            alt="post_thumbnail"
            src={feed.image?.url ?? ""}
            width={24}
            height={24}
            fallbackSrc="/assets/account.png"
          />
        ) : (
          <Image
            alt="post_thumbnail"
            src="/assets/account.png"
            width={24}
            height={24}
            fallbackSrc=""
          />
        )}
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
