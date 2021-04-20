
import React, {  useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const containerStyles = makeStyles(() => ({
  modalHeader: {
    position: 'relative'
  },
  modalTitle: {
    position: 'absolute',
    bottom: '25px',
    left: '25px',
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    // -webkit-backdrop-filter: 'blur( 4px )',
    borderRadius: '10px',
  },
  modalImg: {
    width: '100%',
    height: '100%'
  },
  txtDiv: {
    padding: '1rem 2rem'
  },
  bodyTxt: {
    fontFamily: [
      'Playfair Display',
      'sans-serif',
    ].join(','),
  }
}));

export default function DetailModal(props) {

  const modalClasses = containerStyles();

  const descriptionElementRef = React.useRef(null);

  useEffect(() => {
    
    const { current: descriptionElement } = descriptionElementRef;
    if (descriptionElement !== null) {
      descriptionElement.focus();
      
    }
    
  }, []);

  let recipe = [];
  let recipeNum = props.IngredientName.length;

  for (let i = 0; i < recipeNum; i++) {
    if (!props.IngredientQty[i]) {
      let item = React.createElement('p', {key: i}, `${props.IngredientName[i]}`)
      recipe.push(item)
    } else {
      let item = React.createElement('p', {key: i}, `${props.IngredientQty[i]} ${props.IngredientName[i]}`)
      recipe.push(item)
    }
    
    
  }

  return (
    <>
      <div className={modalClasses.modalHeader}>
        <DialogTitle className={modalClasses.modalTitle} id="scroll-dialog-title">{props.strDrink}</DialogTitle>
        <img className={modalClasses.modalImg} alt={props.strDrink} src={props.strDrinkThumb} />
      </div>
      <DialogContent dividers={true}>
        {recipe}
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
          // className={modalClasses.bodyTxt}
        >
          {props.strInstructions}
        </DialogContentText>
      </DialogContent>
    </>
  );
}
