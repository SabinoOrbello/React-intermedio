import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const MainComponent = (props) => {
  return (
    <Container className="mt-5">
      <Row>
        {fantasy.map((libro) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={libro.img} />
              <Card.Body>
                <Card.Title>{libro.title}</Card.Title>
                <Card.Text>{libro.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainComponent;
