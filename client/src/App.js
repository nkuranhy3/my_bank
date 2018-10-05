import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'


import { Login, Register, Home, LenderDisplay, LoansDisplay, LendersPage, BorrowersPage } from './views/Pages';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
        <Route exact path="/" name="Home Page" component={Home} />
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/lender_details" name="Lender Display Page" component={LenderDisplay} />
          <Route exact path="/loans_details" name="Loans Display Page" component={LoansDisplay} />
          <Route exact path="/lend_money" name="Loans Display Page" component={LendersPage} />
          <Route exact path="/borrow_money" name="Loans Display Page" component={BorrowersPage} />

        </Switch>
      </HashRouter>
    );
  }
}

export default App;
