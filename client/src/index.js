import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';

import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

// const reducer =(state = 0, action)=>{
//     if(action.type === 'INCREAMENT'){
//         return state + 1;
//     }else if(action.type === 'DECREAMENT'){
//         return state - 1;
//     }
//     return state;
// }

// const store = createStore(reducer);

// store.subscribe(()=>{
//     console.log('currentState ', store.getState());
// })

// store.dispatch({
//   type:'INCREAMNET'
// })

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
