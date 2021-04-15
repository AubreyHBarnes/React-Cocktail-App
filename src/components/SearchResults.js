import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function SearchResults(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        props.setChildOpen(false);
    };

    return (
        <> 

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    {/* <Typography variant="h6" className={classes.title}>
                        put search term entered by user?
                    </Typography> */}
                    </Toolbar>
                </AppBar>
                <GridList cellHeight={160} cols={3}>
                    {props.results.map(drink => (
                        <GridListTile key={drink.idDrink} > {/* onClick={() => { handleClick(drink.idDrink) }} */}
                            <img src={drink.strDrinkThumb + `/preview`} alt={drink.strDrink} />
                            
                            <GridListTileBar
                            title={drink.strDrink}

                            />
                        </GridListTile>
                    ))}
                </GridList>
                
            </Dialog>
        
        </>
        
    );
}

// export default function FullScreenDialog() {
  
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open full-screen dialog
//       </Button>
      
//     </div>
//   );
// }
