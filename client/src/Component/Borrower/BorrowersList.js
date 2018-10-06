import React, { Component } from 'react';
import { getAllBorrowers } from '../Queries'
import {graphql } from 'react-apollo'
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row} from 'reactstrap';
import AddBorrower from './AddBorrow'
import Footer from '../Footer'

class BorrowersList extends Component {
    displayBorrowers(){
        var data = this.props.data;
        if(data.loading){
            return <div>Loading data ...</div>
        }else{
            return data.allBorrowers.map(borrowers=>{
                return(
                <ListGroupItem  key={borrowers.id} tag="button" action>{borrowers.name} has borrowed {borrowers.credit}, email is {borrowers.varificationEmail} and will pay by {borrowers.paymentDate}. He has this collateral: {borrowers.colaterel}</ListGroupItem>
                )
            })
        }
    }

  render() {
      console.log(this.props);
    return (

      <div className="animated fadeIn">
      <Row>
        <Col sm="12" xl="6">
          <Card>
            <CardHeader>
              <CardBody>
                <ListGroup>
              <strong className="display-4">Borrowers List </strong>
                      {this.displayBorrowers()}
              </ListGroup>
              </CardBody>
            </CardHeader>
        </Card>
        </Col>
        <Col sm="12" xl="6" >
            <AddBorrower />
        </Col>
        </Row>
        <Footer />
        </div>
    );
  }
}

export default graphql(getAllBorrowers)(BorrowersList);
