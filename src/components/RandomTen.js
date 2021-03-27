import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import SimpleCard from './Card'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around', 
    overflow: 'hidden'
  },
  gridList: {
    flexWrap: 'nowrap'
  }
}))

function RandomTen() {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {

    async function fetchData() {
      const result = await axios(`/.netlify/functions/fetch-random`);
      setData(result.data);

    }

    fetchData();

  }, []);

  const classes = useStyles();

  return (
    <>
      <h4>Try Something New</h4>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          <SimpleCard randomDrinks={data.drinks} />
        </GridList>
      </div>
    </>
  );
}

export default RandomTen;



