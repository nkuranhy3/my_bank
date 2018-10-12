import React, { Component } from 'react';
import { getBorrowerDetails } from '../Queries'
import { graphql} from 'react-apollo'

class BorrowersDetails extends Component{
  displayBorrowerDetails (){
    const borrower =this.props.data.Borrower;
    console.log(borrower)
    if(borrower){
      return(
        <div>
          <h1>{borrower.name}</h1>
          <img src={borrower.picture} alt={borrower.name}/>
          <h3>Will Pay By: {borrower.paymentDate}</h3>
          <h1>Lend the money from: {borrower.lenderName.name}</h1>
          <h1>Colateral: {borrower.colaterel}</h1>
        </div>
      )
    }else{
      return (
        <div className="display-4 text-primary text-center" >You Have Not Tap on Any Borrower </div>
      )
    }
   };
  render() {
  
    return (
      <div>
      {this.displayBorrowerDetails()}
      </div>
    );
  }
}

export default graphql(getBorrowerDetails, {
  options:(props)=>{
    return{
      variables:{
        id: props.borrowerId
      }
    }
  }
})(BorrowersDetails);