import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Signin from './Signin'


class Home extends Component {

  render() {
    return (
      <div style={{width: '100%', margin:'auto'}} >
          <Nav />
          <Header />
            <div>
            <h1 className="text-center">Signin to enjoy our Services</h1>
           
            <Row className="align-items-center">
              <Col col="12" className="mb-4 mb-xl-0 text-center mt-3">
                <Signin />
              </Col>
              </Row>
            </div>
          <Footer />
      </div>
    );
  }
}

export default Home;
