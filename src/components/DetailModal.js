
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog'
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const containerStyles = makeStyles(() => ({
  modalHeader: {
    position: 'relative'
  },
  modalTitle: {
    position: 'absolute',
    bottom: '25px',
    left: '25px',
    background: "rgba(255, 255, 255, 0.5)"
  },
  modalImg: {
    width: '100%',
    height: '100%'
  },
  txtDiv: {
    padding: '1rem 2rem'
  }
}));

export default function DetailModal(props) {

  const modalClasses = containerStyles();

  // const [ingredientName, setIngredient] = useState([])

  // const getIngredients = () => {
  //   for (var key in props) {
  //     console.log(key)
  //   }
  // }

  // getIngredients();

  const descriptionElementRef = React.useRef(null);
React.useEffect(() => {
  
    const { current: descriptionElement } = descriptionElementRef;
    if (descriptionElement !== null) {
      descriptionElement.focus();
    
  }
}, []);

  return (
<>
    <div className={modalClasses.modalHeader}>
      <DialogTitle className={modalClasses.modalTitle} id="scroll-dialog-title">{props.strDrink}</DialogTitle>
      <img className={modalClasses.modalImg} src={props.strDrinkThumb} />
    </div>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.strInstructions}
          </DialogContentText>
        </DialogContent>
    </>
  );
}
