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
                <h1 className="display-3 text-center" style={{marginBottom:50}}>Big Daddy Supremo Bank </h1>
                <p className="lead text-center">We are here for your business. You can <strong>invest</strong> into smaller businesses or you can <strong>Request a Loan.</strong></p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
