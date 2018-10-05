import React, { Component } from 'react';
import {addNewLender, getAllLenders } from '../Queries'
import {graphql, compose } from 'react-apollo'
import { Col, Row, Button,Card, CardBody, CardFooter, CardHeader, Form, FormGroup, FormText, Input, Label} from 'reactstrap';



class AddLender extends Component {
    
    constructor(){
        super();
        this.state ={
            name:"",
            deposit:"",
            varificationEmail:""
        }
    }
    

   submitForm(e){
         e.preventDefault();
        // console.log(this.state);
        this.props.addNewLender({
            variables:{
                name:this.state.name,
                deposit:this.state.deposit,
                varificationEmail:this.state.varificationEmail
            },
            refetchQueries:[
                {query: getAllLenders}
            ]
        }
    )}

  render() {
     
    return (
        <div className="container">
        <Row>
          <Col>
                    <Card>
                    <CardHeader>
                        <strong>Be Careful when Lending </strong> Money
                    </CardHeader>
                    <CardBody>
                        <Form id="" onSubmit={this.submitForm.bind(this)} className="form-horizontal">
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="hf-lender">Lender Name</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="hf-lender" name="hf-lender" placeholder="Enter lender Name" autoComplete="lender" onChange={(e) =>this.setState({name: e.target.value})}  />
                            <FormText className="help-block">Please Lender Name</FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="hf-date">Deposit Amount</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="text" id="hf-deposit" placeholder="Enter The Amount You want to Deposit" autoComplete="current-date"  onChange={(e) =>this.setState({deposit: e.target.value})}/>
                            <FormText className="help-block">Deposit Amount</FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="hf-date">Varification Email </Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="email" id="hf-deposit" placeholder="Enter Varification Email" autoComplete="current-date"  onChange={(e) =>this.setState({varificationEmail: e.target.value})}/>
                            <FormText className="help-block">Email</FormText>
                            </Col>
                        </FormGroup>
                        <CardFooter>
                            <Button onClick={this.togglePrimary} type="submit" size="lg" color="danger"><i className="fa fa-dot-circle-o"></i> Post Money For Lending </Button>
                        </CardFooter>
                        </Form>
                    </CardBody>
                    </Card>
          </Col>
                
        </Row>
        
      </div>
     );
  }
}

export default compose(
    graphql(addNewLender, {name:'addNewLender'}))(AddLender);
