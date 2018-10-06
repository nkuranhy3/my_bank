import React, {Component} from "react"
import LendersList from './Lender/LenderList'
import BorrowersList from "./Borrower/BorrowersList";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class Admin extends Component{
    render (){
        return (
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Big Daddy Supremo Bank</NavbarBrand>
                <NavbarToggler onClick={this.toggle.bind(this)} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>     
                          <button className="btn btn-primary btn-lg" >You Are Login As An Admin</button>    
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <h1 className="display-2" >View all Lenders and Borrowers</h1>
            <LendersList />
            <BorrowersList />
            </div>
        )
    }
}

export default Admin;