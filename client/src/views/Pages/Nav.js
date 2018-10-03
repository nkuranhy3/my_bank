import React, { Component } from 'react';
import RequestLoan from './RequestLoan'
import Lender from './Lender'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
  
 class MyNav extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">My Bank</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <RequestLoan/>                 
              </NavItem>
              <NavItem>
                  <Lender/>                 
              </NavItem>
                <NavItem>
                  <NavLink href="/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

export default MyNav;
