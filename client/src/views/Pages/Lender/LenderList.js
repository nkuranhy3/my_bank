import React, { Component } from 'react';
import { getAllLenders } from '../../Queries'
import {graphql } from 'react-apollo'



class LenderList extends Component {
    displayLenders(){
        var data = this.props.data;
        if(data.loading){
            return <div>Loading data ...</div>
        }else{
            return data.allLenders.map(lenders=>{
                return(
                    <div key={lenders.id} >{lenders.name} - {lenders.deposit}- {lenders.varificationEmail} </div>
                )
            })
        }
    }

  render() {
      console.log(this.props);
    return (
        <div className="display" >
          LenderList page
          {this.displayLenders()}
        </div>
    );
  }
}

export default graphql(getAllLenders)(LenderList);
