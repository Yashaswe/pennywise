import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
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

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

// Define menu items for navigation
const items = ["Home", "AI Consultation", "Finance Education", "Settings"].map(
  (label, index) => ({
    key: String(index + 1),
    label,
  })
);

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header with logo and navigation */}
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#fff",
          padding: "0 24px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ marginRight: "16px" }}>
          <Image
            src="/src/page-logo.png"
            alt="Logo"
            preview={false}
            style={{ width: "120px", height: "80px" }}
          />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            flex: 1,
            justifyContent: "center",
            borderBottom: "none",
          }}
        ></Menu>
      </Header>

      {/* Main Layout with Sidebar and Content */}
      <Layout>
        {/* Main Content */}
        <Content style={{ margin: "24px 16px 0" }}>
          <Breadcrumb style={{ margin: "16px 0", textAlign: "center" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Expenses</Breadcrumb.Item>
          </Breadcrumb>

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

      {/* Footer */}
      <Footer
        style={{
          textAlign: "center",
          padding: "24px",
          backgroundColor: "#f0f2f5",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
