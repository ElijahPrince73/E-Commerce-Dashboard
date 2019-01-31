import React, { Component } from 'react';
import Routes from './Routes.js'
import $ from "jquery";

import "foundation-sites";

class App extends Component {
  componentDidMount() {

    $(document).foundation();

  }
  render() {
    return (
      <Routes />
    );
  }
}

export default App;
