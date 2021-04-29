import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import RandomTen from './components/RandomTen';
import Popular from './components/Popular'
import DailyDrink from './components/DailyDrink';
import SearchName from './components/SearchName';
import './components/Card.css'
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   loadOverlay: {
//       width: '100vw',
//       height: '100vh',
//       background: '#645DD7'
//   },
// });

document.addEventListener("DOMContentLoaded", function() { 
	setTimeout( () => {
		document.querySelector('body').classList.add('loaded')
	}, 1000)
  });


ReactDOM.render(
  <>
    <div id="loader-wrapper">
      <div id="loader"></div>
      <div className="loader-section section-left"></div>
      <div className="loader-section section-right"></div>
    </div>
    <Container maxWidth="md">
      <CssBaseline />
      <DailyDrink />
      <SearchName />
      <RandomTen />
      <Popular />
    </Container>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

