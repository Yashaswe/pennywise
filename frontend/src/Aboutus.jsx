import React from 'react';
import { Avatar, Card, Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const hackerGirlsData = [
  {
    name: 'Yashswe Amatya',
    email: 'amatyayasu@gmail.com',
    school: 'Gettysburg College',
    avatar: 'https://i.pinimg.com/564x/92/33/09/923309a17cecbbc9c70ca113d040a10f.jpg',
  },
  {
    name: 'Aryama Sharma',
    email: 'aryama.subbu@gmail.com',
    school: 'Gettysburg College',
    avatar: 'https://i.pinimg.com/564x/92/33/09/923309a17cecbbc9c70ca113d040a10f.jpg',
  },
  {
    name: 'Aashma Adhikari',
    email: 'adhikariaashma12@gmail.com',
    school: 'Gettysburg College',
    avatar: 'https://i.pinimg.com/564x/92/33/09/923309a17cecbbc9c70ca113d040a10f.jpg',
  },
  {
    name: 'Prashriya Acharya',
    email: 'prashriya.acharya02@gmail.com',
    school: 'Gettysburg College',
    avatar: 'https://i.pinimg.com/564x/92/33/09/923309a17cecbbc9c70ca113d040a10f.jpg',
  },
];

const AboutUs = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#F7DCB9' }}>
      <Title style={{ textAlign: 'center', color: '#DEAC80' }}>About Us</Title>
      <Row gutter={[16, 32]} justify="center"> 
        {hackerGirlsData.map((girl, index) => (
          <Col span={6} key={index}>
            <Card
              style={{ 
                textAlign: 'center', 
                backgroundColor: '#F5F5DC', 
                height: '300px', 
                borderRadius: '8px', 
              }} 
            >
              <Avatar size={64} src={girl.avatar} />
              <Title level={4} style={{ color: '#DEAC80' }}>{girl.name}</Title>
              <Paragraph style={{ color: '#DEAC80' }}>{girl.email}</Paragraph>
              <Paragraph style={{ color: '#DEAC80' }}>{girl.school}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutUs;
