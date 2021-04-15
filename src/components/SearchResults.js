import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import GridList from '@material-ui/core/GridList'

import { DisplayResults } from './Card'


const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      }
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function SearchResults(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        props.setChildOpen(false);
    };

    return (
        <> 

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        {/* <Typography variant="h6" className={classes.title}>
                            put search term entered by user?
                        </Typography> */}
                    </Toolbar>
                </AppBar>
                <Container>
                    <GridList className={classes.gridList} spacing={8} cellHeight={'auto'} cols={3}>
                        <DisplayResults results={props.results} />
                    </GridList> 
                </Container>              
            </Dialog>
        
        </>
        
    );
}
