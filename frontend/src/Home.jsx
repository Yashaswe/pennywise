import React from 'react';
import { Layout, Form, Input, Button, Typography, Row, Col, Statistic, Card } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

const data = [
  { name: 'January', moneySaved: 4000, moneyToBeSaved: 2400 },
  { name: 'February', moneySaved: 3000, moneyToBeSaved: 1398 },
  { name: 'March', moneySaved: 2000, moneyToBeSaved: 9800 },
  { name: 'April', moneySaved: 2780, moneyToBeSaved: 3908 },
  { name: 'May', moneySaved: 1890, moneyToBeSaved: 4800 },
  { name: 'June', moneySaved: 2390, moneyToBeSaved: 3800 },
];

const Home = () => {
  return (
    <Layout>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          style={{
            padding: 24,
            background: "url('/path/to/your/background-image.jpg') no-repeat center center",
            backgroundSize: "cover",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "24px",
            color: "#fff", 
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", 
          }}
        >
          <Title level={2}>Welcome!</Title>
          <Text>
            Take control of your finances and plan your budget wisely.
          </Text>
        </div>

        {/* Animated Statistics Container */}
        <Card style={{ marginBottom: "24px", padding: "16px",  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",  }}>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                title="Money Saved"
                value={0} 
                precision={0}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="$"
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Money to be Saved"
                value={3000} 
                precision={0}
                valueStyle={{ color: "#cf1322" }}
                suffix="$"
              />
            </Col>
          </Row>
        </Card>

        {/* Bar Graph */}
        <Card title="Monthly Savings Overview" style={{ marginBottom: "24px",  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",  }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="moneySaved" fill="#ceab93" />
              <Bar dataKey="moneyToBeSaved" fill="#ad8b73" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Content>

      {/* Right Sidebar */}
      <Sider width={400} style={{ background: "#fff", padding: "24px", margin: "24px 24px 0 0",  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",  }}>
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
            <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "#AB886D" }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Sider>
    </Layout>
  );
};

export default Home;
