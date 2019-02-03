import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
  render() {
    const store = createStore(
      reducers, {}, applyMiddleware(ReduxThunk),
    );
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
