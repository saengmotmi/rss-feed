import { Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import Flex from "components/common/Flex";
import { BLOG_LIST } from "./Rss.constant";
import { SectionTitle } from "./Rss.style";

const FeedHeader = () => {
  return (
    <SectionTitle>
      <Tooltip
        content={
          <Flex gap={8} direction="column">
            {BLOG_LIST.map((blog) => (
              <li key={blog.url} style={{ margin: 0 }}>
                {blog.label}: {blog.url}
              </li>
            ))}
          </Flex>
        }
        rounded
        placement="bottomStart"
        color="invert"
      >
        <Flex align="center" gap={8}>
          <span>기술 포스트</span>
          <FontAwesomeIcon icon={faCircleQuestion} width={14} />
        </Flex>
      </Tooltip>
    </SectionTitle>
  );
};

export default FeedHeader;
