import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import allReducers from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
);

