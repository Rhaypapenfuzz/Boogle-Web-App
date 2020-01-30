import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RandomGrid from './RandomGrid.js';





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    height: 40,
    width: 50,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'grey',
    boxShadow: '0 3px 5px 2px rgba(155, 105, 135, .3)',
  },
  control: {
    padding: theme.spacing(3),
  },
}));

function FillGrid({row}){
  const classes = useStyles();

 return (
  <Grid container 
    direction="row"
    justify="center"
    alignItems="center"
    item xs={15}
  >
   {Object.keys(row).map((key) => {return (<Grid> <Paper className={classes.paper} >{row[key]}</Paper></Grid>)})}
   </Grid>)
}

export default function WordsGrid() {
  let grid = RandomGrid();
 return Object.keys(grid).map((key) => {return (<FillGrid row={grid[key]}/>)});
}
