import React, { Component } from 'react';
import {Col, Row } from 'reactstrap';
import Nav from './Nav'
import Header from './Header'
import Signin from './Signin'
import './Home.css'
import BorrowersPage from './Borrower/BorrowersPage'

class Home extends Component {
  render() {
    return (
      <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <div className="mastfoot">
                <div className="inner">
                <Nav />
                <Header />
                <div>
                <Row className="align-items-center">
                  <Col col="12" className="mb-4 mb-xl-0 text-center mt-3">
                  <BorrowersPage />
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
