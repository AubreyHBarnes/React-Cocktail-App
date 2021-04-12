import React, { useState, useEffect } from "react";
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

function Popular() {
  const [data, setData] = useState({ drinks: [] });

  useEffect(() => {

    async function fetchData() {
      const result = await axios(`/.netlify/functions/fetch-popular`);
      setData(result.data);

    }

    fetchData();

  }, []);

  const classes = useStyles();

  return (
    <>
      <h4>Most Popular</h4>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          <SimpleCard randomDrinks={data.drinks} />
        </GridList>
      </div>
    </>
  );
}

export default Popular;



