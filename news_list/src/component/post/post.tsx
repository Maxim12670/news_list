import type { FunctionComponent } from "react";
import styled from "styled-components";
import { Card, type CardProps } from "antd";
import type { IPost } from "../../interface/IPost";
import ReactionsList from "./components/reactionsList";
import TagsList from "./components/tagsList";

const StyledCard: FunctionComponent<CardProps> = styled(Card)`
  .ant-card-head {
    padding: 0 0 0 12px;
  }

  .ant-card-body {
    padding: 10px 12px;
  }
`;

const Post = ({ title, body, reactions, tags }: IPost) => {
  const sentences = body.split(/(?<=[.!?])\s+/).filter(Boolean);

  return (
    <StyledCard title={title} style={{ display: "flex", flexDirection: "column" }}>
      {sentences.map((item, i) => {
        if (i < 3) return <div key={i}>{item}</div>;
      })}
      <TagsList tags={tags} />
      <ReactionsList {...reactions} />
    </StyledCard>
  );
};

export default Post;
