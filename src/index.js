import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

import './index.css'

export const store = createStore(Reducer,{},applyMiddleware(thunk));

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

