import React, { Component } from 'react';
import Nav from './/Nav'
import Header from './Header'
import Footer from './Footer'
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
