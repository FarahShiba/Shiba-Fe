import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Error() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col className="text-center">
          <h1 className="mb-4">404</h1>
          <p className="mb-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button variant="outline-dark" onClick={handleClick}>
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;
