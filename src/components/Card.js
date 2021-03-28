import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';


// import { createMuiTheme } from '@material-ui/core/styles';

// const titleFont = createMuiTheme({
//     typography: {
//       fontFamily: [
//         'Lato',
//         'sans-serif',
//       ].join(','),
//     },});

//     const bodyFont = createMuiTheme({
//         typography: {
//           fontFamily: [
//             'Playfair Display',
//             'serif',
//           ].join(','),
//         },});

const useStyles = makeStyles({
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
    fontSize: 16,
    fontWeight: 500,
    fontFamily: [
        'Lato',
        'sans-serif',
      ].join(',')
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(239, 249, 240, 0.5)'
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
<>

      {props.randomDrinks.map(drink => (
        <GridListTile key={drink.idDrink} >
            <img src={drink.strDrinkThumb + `/preview`} alt={drink.strDrink} />
            <GridListTileBar
            title={drink.strDrink}
            classes={{
                root: classes.titleBar,
                title: classes.title,
            }}
            
            />
        </GridListTile>
         ))} 

    </>
  );
}

