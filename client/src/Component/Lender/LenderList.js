import React, { Component } from 'react';
import { getAllLenders } from '../Queries'
import {graphql } from 'react-apollo'
import { Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row} from 'reactstrap';
import AddLender from './AddLender'
import Footer from '../Footer'

class LenderList extends Component {
    displayLenders(){
        var data = this.props.data;
        if(data.loading){
            return <div>Loading data ...</div>
        }else{
            return data.allLenders.map(lenders=>{
                return(
                    <ListGroupItem  key={lenders.id} tag="button" action>{lenders.name} Has Deposited  {lenders.deposit}</ListGroupItem>
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
                <strong className="display-4">Lenders List </strong>
            {this.displayLenders()}
          </ListGroup>
              </CardBody>
            </CardHeader>
        </Card>
        </Col>
        <Col sm="12" xl="6">
        <AddLender/>
        </Col>
        </Row>
        <Footer />
        </div>
    );
  }
}

export default graphql(getAllLenders)(LenderList);
