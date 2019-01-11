import React, { Component, Fragment } from 'react';

import Nav from './containers/navContainer.js';
import Body from './containers/bodyContainer.js';
import Pagination from './containers/paginationContainer.js';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Body />
        <Pagination />
      </Fragment>
    );
  }
}

export default App;
