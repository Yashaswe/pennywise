import React from 'react';
import { Card, Col, Row } from 'antd';

const cardStyle = {
  textAlign: 'center',
  color: '#333',
  height: '300px',
  borderRadius: '8px', 
};

const CardSettings = () => (
  <Row gutter={16} style={{ padding: '20px' }}>
    <Col span={8}>
      <Card 
        title="🎃 Halloween Costume Contest" 
        bordered={false} 
        style={cardStyle}
      >
        <p style={{ fontSize: '16px', margin: '0' }}>
          Join us for an exciting event this Halloween! 
        </p>
        <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
          Theme: "Alice in Wonderland"
        </p>
        <p style={{ color: '#333', opacity: 0.8 }}>
          Date: October 31st, 6 PM
        </p>
      </Card>
    </Col>
    <Col span={8}>
      <Card 
        title="🦃 Thanksgiving Update" 
        bordered={false} 
        style={cardStyle}
      >
        <p style={{ fontSize: '16px', margin: '0' }}>
          Thanksgiving is almost here! 
        </p>
        <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
          Join us for a Friendsgiving dinner.
        </p>
        <p style={{ color: '#333', opacity: 0.8 }}>
          Date: November 24th, 4 PM
        </p>
      </Card>
    </Col>
    <Col span={8}>
      <Card 
        title="🎶 Christmas Carol" 
        bordered={false} 
        style={cardStyle}
      >
        <p style={{ fontSize: '16px', margin: '0' }}>
          Celebrate the holiday season with us!
        </p>
        <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
          Enjoy a magical night of Christmas carols.
        </p>
        <p style={{ color: '#333', opacity: 0.8 }}>
          Date: December 15th, 7 PM
        </p>
      </Card>
    </Col>
  </Row>
);

export default CardSettings;
