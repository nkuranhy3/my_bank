import React, { Component } from 'react';
import {addNewLender, getAllLenders } from '../Queries'
import {graphql, compose } from 'react-apollo'


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
        })
   }
  render() {
     
    return (
        <div className="" >
        <h1 className="display-2 text-center">Add A Lender </h1>
        <form className="form" id="" onSubmit={this.submitForm.bind(this)} >
            <div className="form-group">
                <label>Lender Name</label>
                <input type="text" className="form-control" placeholder="Your name "  onChange={(e) =>this.setState({name: e.target.value})} />
            </div>
            <div  className="form-group">
                <label>deposit</label>
                <input type="text" className="form-control" placeholder="Deposit Amount"  onChange={(e) =>this.setState({deposit: e.target.value})}/>
            </div>
            <div  className="form-group">
                <label>varification Email Number</label>
                <input type="email" className="form-control" placeholder="email" onChange={(e) =>this.setState({varificationEmail: e.target.value})}/>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
       </form>
        </div>
    );
  }
}

export default compose(
    graphql(addNewLender, {name:'addNewLender'}))(AddLender);
