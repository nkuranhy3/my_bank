import React, { Component } from 'react';
import { Col, Modal, ModalBody, ModalHeader, Row, Button,Card, CardBody, CardFooter, CardHeader, Form, FormGroup, FormText, Input, Label} from 'reactstrap';

class Lender extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      primary: false,
    };

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
  

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Button color="" onClick={this.togglePrimary} className="mr-1">Lend Money</Button>
            <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                    className={'modal-primary ' + this.props.className}>
                <ModalHeader toggle={this.togglePrimary}>Lend Money</ModalHeader>
                <ModalBody>
                    <Card>
                    <CardHeader>
                        <strong>Be Careful when Lending </strong> Money
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" className="form-horizontal">
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="hf-amount">Amount Lending</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="number" id="hf-amount" name="hf-amount" placeholder="Enter amount $..." autoComplete="amount" />
                            <FormText className="help-block">Please enter Amount</FormText>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md="3">
                            <Label htmlFor="hf-date">Payment Date</Label>
                            </Col>
                            <Col xs="12" md="9">
                            <Input type="date" id="hf-date" name="hf-date" placeholder="Enter date you want your money" autoComplete="current-date"/>
                            <FormText className="help-block">Please enter date</FormText>
                            </Col>
                        </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={this.togglePrimary} type="submit" size="lg" color="danger"><i className="fa fa-dot-circle-o"></i> Lend </Button>
                        </CardFooter>
                    </Card>
          
                </ModalBody>
            </Modal>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Lender;
