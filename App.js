import React from 'react';
import Main from './screens/Main';

// redux
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import rootReducer from './src/reducers'
// import thunk from 'redux-thunk'
// const store = createStore(
  // rootReducer,
  // applyMiddleware(thunk)
// );

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <Main />
      // </Provider>
    );
  }
}
