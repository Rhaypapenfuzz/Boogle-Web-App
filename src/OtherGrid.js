import React from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";


function OtherGrid() {
  const gridItems = {
  0: {size: 6, label: "A"},
  1: {size: 3, label: "B"},
  2: {size: 3, label: "C"}};
  
    return (
    <div className="App">
      <header className="App-header">
        <Grid container justify="center">
        {Object.keys(gridItems).map((rowKey) => {
        return (

        <Grid item key={rowKey} xs={gridItems[rowKey].size}>

        {gridItems[rowKey].label}
        </Grid>
        );
        })}
        </Grid>
      </header>
    </div>
    );

    }
export default OtherGrid;
