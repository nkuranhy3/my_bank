import React, { Component } from 'react';
import AddLender from './AddLender'
import LendersList from './LenderList'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjmvj5iyr62m10117xo7ks4vf"
});

    
class LenderPage extends Component {
  
  render() {
    return (
    <ApolloProvider client={client}>
      <div >
        <h1 className="text-center display-3">Lender List Page</h1>
        <LendersList />
         <AddLender />
      </div>
      </ApolloProvider>
    );
  }
}

export default LenderPage;