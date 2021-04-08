
import React, {  useEffect } from 'react';
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
  // const [recipe, setRecipe] = useState([])

  const descriptionElementRef = React.useRef(null);

  useEffect(() => {
    
    const { current: descriptionElement } = descriptionElementRef;
    if (descriptionElement !== null) {
      descriptionElement.focus();
      
    }
    // for (let i = 0; i < props.IngredientName.length; i++) {
    //   setRecipe(prevArr => [...prevArr, `${props.IngredientQty[i] + ' ' + props.IngredientName[i]}`])
    // }

    // console.log(recipe)
  }, []);

  let recipe = [];
  let recipeNum = props.IngredientName.length;

  for (let i = 0; i < recipeNum; i++) {
    let item = React.createElement('p', {key: i}, `${props.IngredientQty[i]} ${props.IngredientName[i]}`)
    recipe.push(item)
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
          >
            {props.strInstructions}
          </DialogContentText>
        </DialogContent>
    </>
  );
}
