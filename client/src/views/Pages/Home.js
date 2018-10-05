import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';
import Nav from './Nav'
import Header from './Header'
import Signin from './Signin'
import RequestLoan from './RequestLoan'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div class="site-wrapper">
          <div class="site-wrapper-inner">
            <div class="cover-container">
              <div class="mastfoot">
                <div class="inner">
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
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
