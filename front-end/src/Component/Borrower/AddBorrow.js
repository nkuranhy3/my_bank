import React, { Component } from 'react';
import {addNewBorrower, getAllLenders,getAllBorrowers } from '../Queries'
import {graphql, compose } from 'react-apollo'
import { Col,CardFooter, Button, Row,Card, CardBody, CardHeader, Form, FormGroup, FormText, Input, Label} from 'reactstrap';



class AddBorrower extends Component {
    displayLenders(){
        var data= this.props.getAllLenders
        if(data.loading){
            return(<option disabled>Loading data....</option>)
        }else{
            return data.allLenders.map(lender=>{
                return<option key={lender.id} value={lender.id}>{lender.name} Has deposited {lender.deposit}</option>
            })
        }
    }
    constructor(){
        super();
        this.state ={
            name:"",
            colaterel:"",
            credit:"",
            paymentDate:"",
            lenderNameId:""
        }
    }
   submitForm(e){
         e.preventDefault();
        // console.log(this.state);
        this.props.addNewBorrower({
            variables:{
                name:this.state.name,
                colaterel:this.state.colaterel,
                credit:this.state.credit,
                paymentDate:this.state.paymentDate,
                varificationEmail:this.state.varificationEmail,
                lenderNameId:this.state.lenderNameId,
                picture:this.state.picture,

            },
            refetchQueries:[
                {query: getAllBorrowers}
            ]
        })
   }
  render() {
     
    return (
        <div className="container" >
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
                        <Input type="text"  placeholder="Enter lender Name" autoComplete="lender" onChange={(e) =>this.setState({name: e.target.value})}  />
                        <FormText className="help-block">Please Lender Name</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="hf-lender">What Is Your Colaterel </Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="text"  placeholder="Enter colaterel"  onChange={(e) =>this.setState({colaterel: e.target.value})}  />
                        <FormText className="help-block">Your Colaterel</FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="hf-lender">What Is Your Amount Borrowing </Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="text" placeholder="How Much will you want to borrow"  onChange={(e) =>this.setState({credit: e.target.value})}  />
                        <FormText className="help-block">Amount Borrowing</FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="hf-lender">Date Of Payment </Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="date" placeholder="Date you will Pay the Money"  onChange={(e) =>this.setState({paymentDate: e.target.value})}  />
                        <FormText className="help-block">When Will You Paythe Money Back </FormText>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="hf-lender">Varification Email </Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="email" placeholder="Email"  onChange={(e) =>this.setState({varificationEmail: e.target.value})}  />
                        <FormText className="help-block">Email Address To Reach You </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="hf-lender">Your Personal Picture</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <Input type="text" placeholder="Picture"  onChange={(e) =>this.setState({picture: e.target.value})}  />
                        <FormText className="help-block">Personal Picture </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col md="3">
                        <Label htmlFor="hf-lender">Which Invester Will You Like to Borrow From?</Label>
                        </Col>
                        <Col xs="12" md="9">
                        <select onChange={(e)=>this.setState({lenderNameId: e.target.value})}>
                            <option>Select Lender</option>
                            {this.displayLenders()}
                        </select>
                        </Col>
                    </FormGroup>
                    <CardFooter>
                        <Button onClick={this.togglePrimary} type="submit" size="lg" color="warning"><i className="fa fa-dot-circle-o"></i> Send Request To Borrow Money </Button>
                    </CardFooter>
                </Form>
                </CardBody>
                </Card>
                </Col>
                </Row>
                </div>
                );
        }}

export default compose(
    graphql(getAllLenders,{ name: "getAllLenders"}),
    graphql(addNewBorrower, {name:'addNewBorrower'}))(AddBorrower);
