import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import DetailModal from './DetailModal'

import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 150,
    maxHeight: 150
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: [
        'Lato',
        'sans-serif',
      ].join(',')
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false);
  const [singleDrink, setsingleDrink] = useState(null)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

useEffect(() => {
  if (data === null) {
    return //the first click is always null, due to setstate being async. This is for covering that case
  } else {
    
    handleOpen()
    setsingleDrink(data.drinks[0])

  }
  
}, [data]);

const handleClick = async (fetchId) => {
    const result = await axios(`/.netlify/functions/fetch-by-Id?idQuery=${fetchId}`)
    setData(result.data)
    
}

  return (
    <>

      {props.randomDrinks.map(drink => (
        <GridListTile key={drink.idDrink} onClick={() => { handleClick(drink.idDrink) }}> 
            <img src={drink.strDrinkThumb + `/preview`} alt={drink.strDrink} />
            
            <GridListTileBar
            title={drink.strDrink}
            className={classes.title}
            />
        </GridListTile>
         ))}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div><DetailModal {...singleDrink} /></div>
      </Modal>
      
    </>
  );
}


