import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import { FeaturedCard } from './Card'

const useStyles = makeStyles({
    root: {
        width: '100vw',
        maxWidth: 600,
    },
  });

// I want this file to set persistent data, for a daily drink that refreshes once every 24 hours.
//For the time being, it'll be a rotating 'featured' cocktail

export default function DailyDrink () {
    const [data, setData] = useState({ drinks: [] });
    const classes = useStyles();

    useEffect(() => { //On initial load, grab a random drink to display at the top of the app

        async function fetchData() {
            const result = await axios(`/.netlify/functions/fetch-daily`);
            setData(result.data);

          }
      
          fetchData();
    }, [])

    return (
        <>
            { data.drinks[0] ? <FeaturedCard className={classes.root} featuredDrink={data.drinks[0]} /> : null }
        </>
    );
}
