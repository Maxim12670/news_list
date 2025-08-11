import { Divider, Space, Typography } from "antd";
import { DislikeFilled, LikeFilled } from "@ant-design/icons";

interface IReactionsList {
  likes: number;
  dislikes: number;
}

const { Text } = Typography;

const ReactionsList = ({ likes, dislikes }: IReactionsList) => {
  return (
    <Space style={{ marginTop: 10 }}>
      <LikeFilled style={{ color: "#05d30cff" }} />
      <Text>{likes}</Text>
      <Divider type="vertical" />
      <DislikeFilled style={{ color: "#ce0d0dff" }} />
      <Text>{dislikes}</Text>
    </Space>
  );
};

export default ReactionsList;
