import React, { Component } from 'react';
import {addNewBorrower } from '../../Queries'
import {graphql, compose } from 'react-apollo'


class AddBorrower extends Component {
    constructor(){
        super();
        this.state ={
            name:"",
            colaterel:"",
            credit:"",
            paymentDate:""
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
                picture:this.state.picture
            }
        })
   }
  render() {
     
    return (
        <div className="" >
        <h1 className="display-2 text-center">Add A Borrower </h1>
        <form className="form" id="" onSubmit={this.submitForm.bind(this)} >
            <div className="form-group">
                <label>Borrower Name</label>
                <input type="text" className="form-control"   onChange={(e) =>this.setState({name: e.target.value})} />
            </div>
            <div  className="form-group">
                <label>colaterel</label>
                <input type="text" className="form-control"   onChange={(e) =>this.setState({colaterel: e.target.value})}/>
            </div>
            <div  className="form-group">
                <label>credit Number</label>
                <input type="number" className="form-control"  onChange={(e) =>this.setState({credit: e.target.value})}/>
            </div>
            <div  className="form-group">
                <label>paymentDate</label>
                <input type="number" className="form-control"  onChange={(e) =>this.setState({paymentDate: e.target.value})}/>
            </div>

            <div  className="form-group">
                <label>varificationEmail</label>
                <input type="number" className="form-control"  onChange={(e) =>this.setState({varificationEmail: e.target.value})}/>
            </div>

            <div  className="form-group">
                <label>lenderNameId</label>
                <input type="number" className="form-control"  onChange={(e) =>this.setState({lenderNameId: e.target.value})}/>
            </div>

            <div  className="form-group">
                <label>picture</label>
                <input type="number" className="form-control"  onChange={(e) =>this.setState({picture: e.target.value})}/>
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
       </form>
        </div>
    );
  }
}

export default compose(
    graphql(addNewBorrower, {name:'addNewBorrower'}))(AddBorrower);
