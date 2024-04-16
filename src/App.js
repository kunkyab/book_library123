import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Bookstore from './components/Bookstore';

function App() {
  return (
    <Provider store={store}>
      <Bookstore />
    </Provider>
  );
}

export default App;