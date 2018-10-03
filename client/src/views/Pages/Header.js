import React, { Component } from 'react';
import { Col, Container, Jumbotron, Row } from 'reactstrap';

class Header extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Jumbotron fluid>
              <Container fluid >
                <h1 className="display-3 text-center">Fluid jumbotron</h1>
                <p className="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
