import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Col, Modal, ModalBody, ModalHeader, Row, Button,Card, CardBody,  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import Header from './Header'

firebase.initializeApp({
    apiKey: "AIzaSyAaXziK7mx1COo0V7Pq6qaGO8CEz_QhZzc",
    authDomain: "caremedico-auth.firebaseapp.com"
  })

class Firebase extends Component {
    state={
        isSignedIn: false,
        modal: false,
        primary: false,
        isOpen: false
    }
    uiConfig = {
        signInFlow: "redirect",
        signInOptions: [
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
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
  



render(){
    return (
        <div className="container">
            {this.state.isSignedIn ? (
                
                <div >
                    <Navbar style={{marginTop:20}} color="light" light expand="md">
                        <NavbarBrand href="/">Big Daddy Supremo Bank</NavbarBrand>
                        <NavbarToggler onClick={this.toggle.bind(this)} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>         
                                    <button style={{marginRight:10}} class="btn btn-info btn lg">Welcome {firebase.auth().currentUser.displayName}</button>         
                                </NavItem>
                                <NavItem>
                                    <button  class="btn btn-danger btn lg" onClick={() => firebase.auth().signOut()}>Sign out!</button>               
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <div>
                        <Header/>
                        <div className="container">
                            <h1 className="text-center text-dark">Please What Would You Like To Do?</h1>
                            <span className="display-inline" >
                                <a href="/" style={{marginRight:50}} class="btn btn-info btn-lg">LEND MONEY</a>
                                <a href="/" type="button" class="btn btn-outline-info btn-lg">BORROW MONEY</a>
                            </span>
                        </div>
                    </div>
                </div>
                )  :  (
                    <Row>
                        <Col>
                            <Button color="primary" size="lg" block onClick={this.togglePrimary.bind(this)} className="mr-1">SIGNIN TO GET STARTED </Button>
                            <Modal isOpen={this.state.primary} toggle={this.togglePrimary.bind(this)}
                                    className={'modal-primary ' + this.props.className}>
                                <ModalHeader toggle={this.togglePrimary.bind(this)}>Signin To Deposit Money For Lending</ModalHeader>
                                <ModalBody>
                                    <Card>
                                        <CardBody>
                                            <StyledFirebaseAuth
                                                uiConfig={this.uiConfig}
                                                firebaseAuth={firebase.auth()}/>
                                        </CardBody>
                                    </Card>
                                </ModalBody>
                            </Modal>
                        </Col>
                        </Row>
                        )}
                    </div>
                )
            }
        }

export default Firebase