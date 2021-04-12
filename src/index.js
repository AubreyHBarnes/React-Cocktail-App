import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import RandomTen from './components/RandomTen';
import Popular from './components/Popular'
import DailyDrink from './components/DailyDrink';
ReactDOM.render(
  <>
    <CssBaseline />
    <DailyDrink />
    <RandomTen />
    <Popular />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

