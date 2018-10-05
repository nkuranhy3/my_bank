import React, { Component } from 'react';
import { getAllBorrowers } from '../../Queries'
import {graphql } from 'react-apollo'



class BorrowersList extends Component {
    displayBorrowers(){
        var data = this.props.data;
        if(data.loading){
            return <div>Loading data ...</div>
        }else{
            return data.allBorrowers.map(borrowers=>{
                return(
                    <div key={borrowers.id} >{borrowers.name} - {borrowers.colaterel}- {borrowers.credit}-{borrowers.paymentDate} {borrowers.picture}  </div>
                )
            })
        }
    }

  render() {
      console.log(this.props);
    return (
        <div className="display" >
          BorrowersList page
          {this.displayBorrowers()}
        </div>
    );
  }
}

export default graphql(getAllBorrowers)(BorrowersList);
