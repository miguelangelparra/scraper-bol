import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import {NavBar} from "./components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </Row>
    </Container>
  );
}

export default App;
