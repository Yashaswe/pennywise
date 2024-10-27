import { useEffect, useState } from "react";

import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Image,
  Card,
  Typography,
  Form,
  Input,
  Button,
} from "antd";

import Chatbot from "./Chatbot";
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      {/* Main Content */}
      <Content style={{ margin: "24px 16px 0" }}>
        {/* Welcome Message */}
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <Title level={2}>Welcome!</Title>
          <Text>
            Take control of your finances and plan your budget wisely.
          </Text>
        </div>
      </Content>

      {/* Right Sidebar */}
      <Sider
        theme="light"
        width={400}
        style={{
          background: colorBgContainer,
          padding: "24px",
          margin: "24px 24px 0 0",
        }}
      >
        <Form layout="vertical">
          <Form.Item label="Event Type" name="name">
            <Input placeholder="Enter your event type" />
          </Form.Item>
          <Form.Item label="Expense" name="expense">
            <Input placeholder="Enter your event expense" />
          </Form.Item>
          <Form.Item label="Event Date" name="date">
            <Input placeholder="Enter your event date" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                backgroundColor: "#FFB26F",
                "&hover": { backgroundColor: "#DE8F5F" },
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Sider>
    </Layout>
  );
};

export default Home;
