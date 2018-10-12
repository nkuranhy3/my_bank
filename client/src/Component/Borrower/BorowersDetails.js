import React, { Component } from 'react';
import { getBorrowerDetails } from '../Queries'
import { graphql} from 'react-apollo'

class BorrowersDetails extends Component{
  displayBorrowerDetails (){
    const borrower =this.props.data.Borrower;
 
    if(borrower){
      return(
        <div>
          <h1>{borrower.name}</h1>
          <img src={borrower.picture} alt={borrower.name}/>
        </div>
      )
    }else{
      return (
        <div>there is no book</div>
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