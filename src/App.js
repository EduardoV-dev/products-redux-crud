import React from 'react';
import AppRoute from './services/route';
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;