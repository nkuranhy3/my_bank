import React, { Component } from 'react';
import BorrowersList from './BorrowersList'

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjmvj5iyr62m10117xo7ks4vf"
});

    
class BorrowerPage extends Component {
  
  render() {
    return (
        <ApolloProvider client={client}>
          <div >
            <h1 className="text-center display-3">Borrower  Page</h1>
              <BorrowersList />
          </div>
        </ApolloProvider>
    );
  }
}

export default BorrowerPage;