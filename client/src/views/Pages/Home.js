import React, { Component } from 'react';
import Nav from '../../container/Nav'
import Header from './Header'
import Footer from '../../container/Footer'
class Home extends Component {

  render() {
    return (
      <div >
          <Nav />
          <Header />
          <Footer />
      </div>
    );
  }
}

export default Home;
