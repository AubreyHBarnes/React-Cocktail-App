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
//Since I have no backend to persist data, and localStorage doesn't seem like a great idea, it'll be a rotating 'featured' cocktail

//The logical flow I had in mind was
//1. Retrieve data from API
//2. Pass data to component whose job is to display that data

export default function DailyDrink () {
    const [data, setData] = useState({ drinks: [] });
    const classes = useStyles();

    useEffect(() => { //On initial load, grab a random drink to display at the top of the app

        async function fetchData() {
            axios.get(`/.netlify/functions/fetch-daily`)
                .then(result => setData(result.data))   
          }
      
          fetchData();
    }, [])

    return (
        <>
            { data.drinks[0] ? <FeaturedCard className={classes.root} featuredDrink={data.drinks[0]} /> : null }
        </>
    );
}
