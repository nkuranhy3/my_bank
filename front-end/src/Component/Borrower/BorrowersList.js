import React, { Component } from 'react';
import { getAllBorrowers } from '../Queries'
import {graphql } from 'react-apollo'



class BorrowersList extends Component {
    displayBorrowers(){
        var data = this.props.data;
        if(data.loading){
            return <div>Loading data ...</div>
        }else{
            return data.allBorrowers.map(borrowers=>{
                return(
                    <div className="container">
                        <div key={borrowers.id} >
                            <li class="list-group-item">{borrowers.name} has borrowed {borrowers.credit}, email is {borrowers.varificationEmail} and will pay by {borrowers.paymentDate}. He has this collateral: {borrowers.colaterel}</li>
                        </div>
                 </div>
                )
            })
        }
    }

  render() {
      console.log(this.props);
    return (
    <ol class="list-group list-group-flush">
          {this.displayBorrowers()}
        </ol>
    );
  }
}

export default graphql(getAllBorrowers)(BorrowersList);
