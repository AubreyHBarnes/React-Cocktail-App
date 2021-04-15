import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchResults from './SearchResults'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        textAlign: 'center'
      },
    },
    formContainer: {
        width: '30ch',
        margin: '0 auto'
    }
  }));

export default function SearchName() {
    const [data, setData] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [childOpen, setChildOpen] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        if (data.drinks && data.drinks !== null) {
            // console.log(data.drinks)
        } else {
            console.log('no results found')
        }
        
    }, [data])

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(searchTerm)  
        if (searchTerm.trim() !== '') { //if user input is not an empty string
            axios.get(`/.netlify/functions/search-by-name?searchQuery=${searchTerm}`)
            .then(result => {setData(result.data)})
            .then(setChildOpen(true))
        } else {
            console.log('please enter a search term')
        }
        
        
    }

    return (
        <>
            <div className={classes.formContainer}>
                <form className={classes.root} onSubmit={event => handleSubmit(event)} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Search by Name" onInput={event => setSearchTerm(event.target.value)} variant="outlined"  /> {/*  */}
                </form>
            </div>
            {childOpen && data ? <SearchResults setChildOpen={setChildOpen} results={data.drinks} /> : null}
        </>
    );
}