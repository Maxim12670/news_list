import { Flex, Tag } from "antd";

interface ITagsList {
  tags: string[];
}

const TagsList = ({ tags }: ITagsList) => {
  return (
    tags.length > 0 && (
      <Flex style={{ marginTop: 10 }}>
        {tags.map((tag, i) => (
          <Tag key={i} color="#108ee9">
            {tag}
          </Tag>
        ))}
      </Flex>
    )
  );
};

export default TagsList;
