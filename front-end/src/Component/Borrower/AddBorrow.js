import React, { Component } from 'react';
import {addNewBorrower, getAllLenders,getAllBorrowers } from '../Queries'
import {graphql, compose } from 'react-apollo'


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
                <input type="text" className="form-control"  onChange={(e) =>this.setState({credit: e.target.value})}/>
            </div>
            <div  className="form-group">
                <label>paymentDate</label>
                <input type="date" className="form-control"  onChange={(e) =>this.setState({paymentDate: e.target.value})}/>
            </div>

            <div  className="form-group">
                <label>varificationEmail</label>
                <input type="text" className="form-control"  onChange={(e) =>this.setState({varificationEmail: e.target.value})}/>
            </div>
            <div className="form-group">
                <label>picture</label>
                <input type="text" className="form-control"  onChange={(e) =>this.setState({picture: e.target.value})}/>
            </div>
            <div  className="form-group">
                <label>Lender</label>
                <select onChange={(e)=>this.setState({lenderNameId: e.target.value})}>
                    <option>Select Lender</option>
                    {this.displayLenders()}
                </select>
            </div>
            
            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
       </form>
        </div>
    );
  }
}

export default compose(
    graphql(getAllLenders,{ name: "getAllLenders"}),
    graphql(addNewBorrower, {name:'addNewBorrower'}))(AddBorrower);
