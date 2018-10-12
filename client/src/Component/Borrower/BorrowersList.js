import React, { Component } from 'react';
import { getAllBorrowers } from '../Queries'
import {graphql } from 'react-apollo'
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row} from 'reactstrap';
import AddBorrower from './AddBorrow'
import BorrowersDetails from './BorowersDetails'
import Footer from '../Footer'

class BorrowersList extends Component {
    constructor(props){
        super(props);
        this.state={
            selected : null
        }
    }
    displayBorrowers(){
        var data = this.props.data;
        if(data.loading){
            return <div>Loading data ...</div>
        }else{
            return data.allBorrowers.map(borrowers=>{
                return(
                <ListGroupItem  key={borrowers.id} tag="button" action onClick={(e) =>{this.setState({selected: borrowers.id})}}>
                {borrowers.name} has BorrowersDetails {borrowers.credit}</ListGroupItem>
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
              <CardBody>
                <ListGroup>
                <strong className="display-4">Borrowers List </strong>
                    {this.displayBorrowers()}
                </ListGroup>
             </CardBody>
            </Card>
            </Col>
            <Col sm="12" xl="6" >
            <CardHeader>
                        TAP TO SEE DETAILS
                </CardHeader>
               <BorrowersDetails borrowerId= {this.state.selected} /> 
            </Col>
      </Row>
      <Row>
        <Col>
            <Card>
                <CardHeader>
                        Add Borrower
                </CardHeader>
                <CardBody>
                    <AddBorrower />
                </CardBody>
            </Card> 
        </Col>
      </Row>
    <Footer />
    </div>
    );
  }
}

export default graphql(getAllBorrowers)(BorrowersList);
