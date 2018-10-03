import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'


// Pages
import { Login, Register, Home } from './views/Pages';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
        <Route exact path="/" name="Home Page" component={Home} />
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
