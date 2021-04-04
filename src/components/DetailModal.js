
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: 'absolute',
    margin: '0 auto',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function DetailModal(props) {

  const classes = useStyles();

  return (
    <div>
        <div className={classes.paper}>
          <h2 id="simple-modal-title">{props.strDrink}</h2>
          <p id="simple-modal-description">
            {props.strInstructions}
          </p>
        </div>
    </div>
  );
}
