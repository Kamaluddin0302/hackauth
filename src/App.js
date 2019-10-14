import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './config/store'
import {Provider} from 'react-redux'
import RouterExaple from './config/Router/router'

function App() {
  return (
    <div className="App">
      <Provider store = {Store}>
      <RouterExaple />
      </Provider>
    </div>
  );
}

export default App;
