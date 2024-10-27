import { Layout, theme, Typography, Form, Input, Button } from "antd";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [form] = Form.useForm();
  const [incomeData, setIncomeData] = useState(null); // State for income
  const [userData, setUserData] = useState(null); // State for user data

  const onFinish = async (values) => {
    const income = values.expense; // assuming expense is income here
    setIncomeData(income); // Update income state

    try {
      const updatedValues = {
        ...values,
        formType: 'event', 
      };
      const response = await axios.post('/api/submit-event', updatedValues);
      message.success('Event submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Error submitting event!');
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/get-user-data');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <Layout>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <Title level={2}>Welcome {userData?.name|| 'Guest'}!</Title>
          <Text>
            Take control of your finances and plan your budget wisely.
          </Text>
          <br></br>
        </div>
      </Content>

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
              style={{ width: "100%", backgroundColor: "#AB886D" }}
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
