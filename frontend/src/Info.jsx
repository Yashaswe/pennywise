import React from "react";
import { Card, Row, Col, Image, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./Info.css";
import finan from "./finan.png";
import respon from "./respon.png";
import sustain from "./sustain.png";

const { Title } = Typography;

const Info = () => {
  const cardData = [
    {
      title: "Responsible Financing",
      image: finan,
      alt: "Responsible Financing",
      description:
        "Discover sustainable financing practices that empower you to secure your financial future. Learn how to make ethical financial decisions, manage your money wisely, and invest in ways that benefit both you and the community.",
      link: "https://billionbricks.org/blog/ybdt6uc0prinb1rdghwukiztde3wo8/",
    },
    {
      title: "Sustainable Investing",
      image: respon,
      alt: "Sustainable Investing",
      description:
        "Explore the world of ESG (Environmental, Social, Governance) investing. Understand what sustainable investing entails and how you can align your investments with your values, supporting companies that prioritize positive social and environmental impact.",
      link: "https://www.sciencedirect.com/science/article/pii/S2666188824000960",
    },
    {
      title: "Economic Conditions",
      image: sustain,
      alt: "Economic Conditions",
      description:
        "Stay informed about key economic factors such as inflation and its effects on your finances. Learn to recognize financial scams and understand how to protect your money in an ever-changing economic landscape.",
      link: "https://www.investopedia.com/terms/i/inflation.asp",
    },
  ];

  return (
    <div className="content-container">
      <Title level={2} style={{ textAlign: "center" }}>
        Grow Knowledge, Grow Money
      </Title>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              className="card"
              cover={
                <Image
                  className="card-image"
                  src={card.image}
                  alt={card.alt}
                  preview={false}
                />
              }
              actions={[
                <Button
                  type="link"
                  className="learn-more-button"
                  onClick={() =>
                    window.open(card.link, "_blank", "noopener noreferrer")
                  }
                >
                  Learn More <ArrowRightOutlined />
                </Button>,
              ]}
            >
              <Card.Meta title={card.title} description={card.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Info;
