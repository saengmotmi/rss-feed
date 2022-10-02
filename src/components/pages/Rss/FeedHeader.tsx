import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { Tooltip } from "@nextui-org/react";

import Flex from "components/common/Flex";
import { BLOG_LIST } from "./Rss.constant";
import { SectionTitle } from "./Rss.style";

const FeedHeader = () => {
  return (
    <SectionTitle>
      <Flex align="center" gap={8}>
        <span>기술 포스트</span>
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
          placement="bottom"
          color="invert"
        >
          <FontAwesomeIcon icon={faCircleQuestion} width={14} />
        </Tooltip>
      </Flex>
    </SectionTitle>
  );
};

export default FeedHeader;
