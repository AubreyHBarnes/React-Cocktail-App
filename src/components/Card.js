import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DetailModal from './DetailModal'
import Dialog from '@material-ui/core/Dialog';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '400px',
    margin: '0 auto'
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
      ].join(','),
      background: 'rgba( 255, 255, 255, 0.25 )',
      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
      backdropFilter: 'blur( 4px )',
      color: theme.palette.primary.dark
      // -webkit-backdrop-filter: 'blur( 4px )',
      // borderRadius: '10px',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  resultsTile: {
    margin: '.25rem'
  },
  gListTile: {
    padding: '.125rem'
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();

  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false);
  const [IngredientName, setIngredientName] = useState([])
  const [IngredientQty, setIngredientQty] = useState([])
  const [singleDrink, setsingleDrink] = useState(null)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(function(){ setIngredientName([]); setIngredientQty([]); }, 400);
    
  };

useEffect(() => {

  const printMe = (printData) => {

    for (let key in printData) {
      if (printData[key] && printData[key] !== "" && key.includes('Ingredient')) {
        setIngredientName(prevArr => [...prevArr, printData[key]])
      }

      if (printData[key] && printData[key] !== "" && key.includes('Measure')) {
        setIngredientQty(prevArr => [...prevArr, printData[key]])
      } else if (key.includes('Measure') && !printData[key]) {
        return
      }
    }  
  }

  if (!data) {
    return //the first click is always null, due to setstate being async. This is for covering that case
  } else {
    handleOpen()
    setsingleDrink(data.drinks[0])
    let print = data
    printMe(print.drinks[0])
  }
  
}, [data]);

const handleClick = async (fetchId) => {
    const result = await axios(`/.netlify/functions/fetch-by-Id?idQuery=${fetchId}`)
    setData(result.data)
}

  return (
    <>

      {props.randomDrinks.map(drink => (
        <GridListTile key={drink.idDrink} onClick={() => { handleClick(drink.idDrink) }} className={classes.gListTile}> 
            <img src={drink.strDrinkThumb + `/preview`} alt={drink.strDrink} />
            
            <GridListTileBar
            title={drink.strDrink}
            className={classes.title}
            />
        </GridListTile>
         ))}

        <Dialog
          className={classes.root}
          open={open}
          onClose={handleClose}
          scroll={'paper'}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DetailModal {...singleDrink} IngredientName={IngredientName} IngredientQty={IngredientQty} />
      </Dialog>
      
    </>
  );
}

export function FeaturedCard ({ featuredDrink }) {

  const classes = useStyles();

  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false);
  const [IngredientName, setIngredientName] = useState([])
  const [IngredientQty, setIngredientQty] = useState([])
  const [singleDrink, setsingleDrink] = useState(null)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(function(){ setIngredientName([]); setIngredientQty([]); }, 400);
    
  };

useEffect(() => {

  const printMe = (printData) => {

    for (let key in printData) {
      if (printData[key] && printData[key] !== "" && key.includes('Ingredient')) {
        setIngredientName(prevArr => [...prevArr, printData[key]])
      }

      if (printData[key] && printData[key] !== "" && key.includes('Measure')) {
        setIngredientQty(prevArr => [...prevArr, printData[key]])
      } else if (key.includes('Measure') && !printData[key]) {
        return
      }
    }
    
  }

  if (!data) {
    return //the first click is always null, due to setstate being async. This is for covering that case
  } else {
    
    handleOpen()
    setsingleDrink(data.drinks[0])
    let print = data
    printMe(print.drinks[0])

  }
  
}, [data]);

const handleClick = async (fetchId) => { 

    axios.get(`/.netlify/functions/fetch-by-Id?idQuery=${fetchId}`)
            .then(result => {setData(result.data)})
}

  return (
    <>
      <Card className={classes.root} onClick={ () => handleClick(featuredDrink.idDrink) }>
        <CardActionArea>
            <CardMedia
                component="img"
                alt={featuredDrink.strDrink}
                height="auto"
                image={featuredDrink.strDrinkThumb}
                title={featuredDrink.strDrink}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {featuredDrink.strDrink}
                </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
          className={classes.root}
          open={open}
          onClose={handleClose}
          scroll={'paper'}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DetailModal {...singleDrink} IngredientName={IngredientName} IngredientQty={IngredientQty} />
      </Dialog> 
    </>
  );
}


export function DisplayResults(props) {
  const classes = useStyles();

  const [data, setData] = useState(null)
  const [open, setOpen] = useState(false);
  const [IngredientName, setIngredientName] = useState([])
  const [IngredientQty, setIngredientQty] = useState([])
  const [singleDrink, setsingleDrink] = useState(null)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(function(){ setIngredientName([]); setIngredientQty([]); }, 400);
    
  };

useEffect(() => {

  const printMe = (printData) => {

    for (let key in printData) {
      if (printData[key] && printData[key] !== "" && key.includes('Ingredient')) {
        setIngredientName(prevArr => [...prevArr, printData[key]])
      }

      if (printData[key] && printData[key] !== "" && key.includes('Measure')) {
        setIngredientQty(prevArr => [...prevArr, printData[key]])
      } else if (key.includes('Measure') && !printData[key]) {
        return
      }
    }  
  }

  if (!data) {
    return //the first click is always null, due to setstate being async. This is for covering that case
  } else {
    handleOpen()
    setsingleDrink(data.drinks[0])
    let print = data
    printMe(print.drinks[0])
  }
  
}, [data]);

const handleClick = async (fetchId) => {
    const result = await axios(`/.netlify/functions/fetch-by-Id?idQuery=${fetchId}`)
    setData(result.data)
}

  return (
    <>

      {props.results.map(drink => (
        <GridListTile key={drink.idDrink} onClick={() => { handleClick(drink.idDrink) }} className={classes.resultsTile}> 
            <img src={drink.strDrinkThumb + `/preview`} alt={drink.strDrink} />
            
            <GridListTileBar
            title={drink.strDrink}
            className={classes.title}
            />
        </GridListTile>
         ))}

        <Dialog
          className={classes.root}
          open={open}
          onClose={handleClose}
          scroll={'paper'}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DetailModal {...singleDrink} IngredientName={IngredientName} IngredientQty={IngredientQty} />
      </Dialog>
      
    </>
  );
}