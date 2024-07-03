import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF-YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <Container>
        <h1 className="text-center mb-4"> FitFusion PLANS</h1>
        <Row>
          {pricing.map((element) => (
            <Col md={4} key={element.title}>
              <Card className="mb-4">
                <Card.Img
                  variant="top"
                  src={element.imgUrl}
                  alt={element.title}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {element.title} PACKAGE
                  </Card.Title>
                  <Card.Text className="text-center">
                    Rs {element.price}
                  </Card.Text>
                  <Card.Text className="text-center">
                    For {element.length} Months
                  </Card.Text>
                  <ul className="list-unstyled">
                    <li>
                      <Check /> Equipment
                    </li>
                    <li>
                      <Check /> All Day Free Training
                    </li>
                    <li>
                      <Check /> Free Restroom
                    </li>
                    <li>
                      <Check /> 24/7 Skilled Support
                    </li>
                    <li>
                      <Check /> 20 Days Freezing Option
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link to={"/"} className="btn btn-primary">
                      Join Now
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
