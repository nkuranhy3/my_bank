import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Signin from './Signin'
import RequestLoan from './RequestLoan'


class Home extends Component {

  render() {
    return (
      <div style={{width: '100%', margin:'auto'}} >
          <Nav />
          <Header />
            <div>
            <Row className="align-items-center">
              <Col col="12" className="mb-4 mb-xl-0 text-center mt-3">

                <RequestLoan/>

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
