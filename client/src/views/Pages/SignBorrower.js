import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import RequestLoan from './RequestLoan'
import { Col, Modal, ModalBody, ModalHeader, Row, Button,Card, CardBody} from 'reactstrap';


firebase.initializeApp({
    apiKey: "AIzaSyAaXziK7mx1COo0V7Pq6qaGO8CEz_QhZzc",
    authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
  })

class Firebase extends Component {
    state={
        isSignedIn: false,
        modal: false,
        primary: false,
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
  
    this.togglePrimary = this.togglePrimary.bind(this);
  
      this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
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
                
                <span>
                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    <RequestLoan />
                </span>
                )  :  (
                    <Row>
                        <Col>
                            <Button color="primary" size="lg" block onClick={this.togglePrimary} className="mr-1">SIGNIN RequestLoan</Button>
                            <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                                    className={'modal-primary ' + this.props.className}>
                                <ModalHeader toggle={this.togglePrimary}>Signin To Borrow Money</ModalHeader>
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