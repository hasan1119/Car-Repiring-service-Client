import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroArea = () => {
  return (
    <Container
      style={{
        height: "calc(100vh - 56px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row>
        <Col sm={12} lg={5}>
          <h1>We Make Car Repair Hassle Free</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary rounded-pill">Get Started</button>
        </Col>
        <Col sm={12} lg={7}>
          <img
            className="img-fluid"
            src="https://my-gerez.web.app/static/media/banner-img.6552e1ee.png"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroArea;
