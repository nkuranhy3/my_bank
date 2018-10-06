import React, { Component } from 'react';
import BorrowersList from './BorrowersList'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjmvj5iyr62m10117xo7ks4vf"
});

    
class BorrowerPage extends Component {
  state={
    isSignedIn: false,
    modal: false,
    primary: false,
    isOpen: false
}

toggle() {
this.setState({ collapse: !this.state.collapse });
}

toggleFade() {
this.setState((prevState) => { return { fadeIn: !prevState }});
}


togglePrimary() {
this.setState({
  primary: !this.state.primary,
});
}
  render() {
    return (
        <ApolloProvider client={client}>
          <div >
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Big Daddy Supremo Bank</NavbarBrand>
                <NavbarToggler onClick={this.toggle.bind(this)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                          <button style={{marginRight:10}} href="borrow" className="btn btn-outline-primary btn-lg" >Borrow Money</button> 
                        </NavItem>
                        <NavItem>     
                          <button className="btn btn-primary btn-lg" >You Are Login As Borrower</button>    
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <h1 className="text-center display-1">Borrowers Page</h1>
              <BorrowersList />
          </div>
        </ApolloProvider>
    );
  }
}

export default BorrowerPage;