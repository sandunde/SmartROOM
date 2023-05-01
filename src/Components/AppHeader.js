import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from "antd";
import "../App.css";

const { Text } = Typography;

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <div>
        <Image
          style={{ borderRadius: 20, width: 40 }}
          src="https://lh3.googleusercontent.com/ogw/AAEL6siqtYfiq0Ufc9C6Gj6femgrFLz31zavFopEHFA23w=s64-c-mo"
        ></Image>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 18,
            color: "white",
            fontWeight: 500,
          }}
        >
          Sandun De Silva
        </Text>
      </div>
      <Typography.Title style={{ color: "white",fontSize: 30}}>SmartROOM</Typography.Title>
      <Space>
        <Badge>
          <BellFilled style={{ fontSize: 30, marginRight: 20 }} />
          <Badge dot>
            <MailOutlined style={{ fontSize: 30 }} />
          </Badge>
        </Badge>
      </Space>
    </div>
  );
}
export default AppHeader;
