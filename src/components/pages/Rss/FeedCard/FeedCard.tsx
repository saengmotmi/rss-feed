import dayjs from "dayjs";
import Image from "components/common/ImageWithFallback/ImageWithFallback";

import Flex from "components/common/Flex";
import type { Item } from "types/rss/rssApi";
import { TIME_FORMAT_DATE_AND_MINUTE } from "utils/constants/dates";
import {
  Author,
  BlogContent,
  BlogTitle,
  Container,
  Thumbnail,
  WrittenAt,
} from "./FeedCard.style";

interface Props {
  feed: Item;
}

const FeedCard = ({ feed }: Props) => {
  const content = feed["content:encoded"] || feed.content;

  return (
    <Container>
      <Flex gap={10}>
        <Flex direction="column" gap={8}>
          <BlogTitle>
            <a href={feed.link} target="_blank" rel="noreferrer">
              {feed.title}
            </a>
          </BlogTitle>
          <BlogContent>
            <a href={feed.link} target="_blank" rel="noreferrer">
              {content}
            </a>
          </BlogContent>
        </Flex>
        <Thumbnail />
      </Flex>
      <Flex justify="start" align="center" gap={8}>
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
        <Author>
          {feed.blogTitle} {feed.author && `- ${feed.author}`}
        </Author>
        <WrittenAt>
          {dayjs(feed.isoDate).format(TIME_FORMAT_DATE_AND_MINUTE)}
        </WrittenAt>
      </Flex>
    </Container>
  );
};

export default FeedCard;
