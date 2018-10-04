import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
class Home extends Component {

  render() {
    return (
      <div style={{width: '100%', margin:'auto'}} >
          <Nav />
          <Header />
            <div>
            <h1 className="text-center">Tell us what you want to do..</h1>
           
            <Row className="align-items-center">
              <Col col="12" className="mb-4 mb-xl-0 text-center mt-3">
                <Button  color="primary" size="lg">Request A Loan</Button>
                <Button style={{marginLeft: 14 }} outline color="info" size="lg">Invets Money</Button>
              </Col>
              </Row>
            </div>
          <Footer />
      </div>
    );
  }
}

export default Home;
