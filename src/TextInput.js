import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import makeHashMap from './HashMap.js';
import HashMap from './HashMap.js';
import WordsGrid from './WordsGrid.js';
import new_boggle_solver from './newBoggleSolver.js';
import RandomGrid from './RandomGrid.js';


let grid = RandomGrid();
let allWords = new HashMap();
allWords = makeHashMap();
var wordListJson = require('./full-wordlist.json');  
window.allSolutions = [" "];
var dictionary = wordListJson.words;



function checkGuess(guess){
  	//let isWordValid = boggle_solver(grid, guess.toUpperCase());
  	let isWordValid = new_boggle_solver(grid, guess.toUpperCase());
  	console.log(isWordValid);
  	if(isWordValid){
        let isWord = allWords.get(guess.toLowerCase());
        if(window.found.includes(guess.toUpperCase()) ){
  				alert("Answer already found");
  		}
  		else if(isWord && guess.length >= 3){
  				alert("Correct Word");
  				window.found.push(guess.toUpperCase());
  				window.allSolutions.push(guess.toUpperCase());  			

  		}
  		else{
  			 alert("Wrong");

  		}
	// 	return guess;
	// }
 	}
}
 const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: "61px",
  },
});


class OutlinedTextFields extends React.Component {
	// state ={
	// 	open: true;
	// };

   handleOnChange = event => {
     console.log(event.target.value);
   };
	constructor(props) {
      super(props);
      this.state = {value : '', text : ''};
      //this.state = this.state.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.keyPress = this.keyPress.bind(this);
      window.found = [];

   } 
   handleChange(e) {
      this.setState({ value: e.target.value });
   }
   keyPress(e){
      if(e.keyCode === 13){
         let guess = e.target.value;
		//clear textField
		//this.setState({value: ''});
		checkGuess(guess);

    this.setState({
      	   text: window.found + ' ', 

    	})

      }
   }
   sendData = () => {
         this.props.callbackFunction("Hey Popsie, How’s it going?");
    }
  render() {
    const { classes } = this.props;

    return (
    <div key="1">	
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
        input value ={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} fullWidth={true}
          id="outlined-editToDO"
          label="Type Word"
          defaultValue={this.props.defaultToDoValue}
          className={classes.textField}
          multiline
          margin="normal"
          variant="outlined"
        />
      </form>
	  <p style={{color: 'Black'}} >Correct Words: {this.state.text}</p>
  	</div>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);

