import React, { Component } from 'react';
import './App.css';
import Main from './Component/Main'
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
