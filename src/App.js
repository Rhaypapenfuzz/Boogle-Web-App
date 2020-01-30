import React from 'react';
import './App.css';
import TextInput from './TextInput.js';
//import boggle_solver from './boggle_solver.js';
import WordsGrid from './WordsGrid.js';
import swal from '@sweetalert/with-react';


class App extends React.Component {

  state = { message: "" }
  callbackFunction = (childData) => {
        this.setState({message: childData})
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })

     var fiveMinutes = 60 * 5,
         display = document.querySelector('#time');
     startTimer(fiveMinutes, display);
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
      Stop_function()
  }
  
handleRefresh = () =>{
      window.location.reload()
  }

  App() {


}
  render() {
          return(
          <div className="App">
            <header className="App-header">
             Boogle Solver
              <p>
          <button style={{maxWidth: '200px', maxHeight: '70px', minWidth: '130px', minHeight: '70px'}} class="myButton" onClick={this.handleRefresh}>New Game</button>
        {this.state.isActive ? <WordsGrid/> : null }
        <p> </p>
          {this.state.isActive ? <TextInput /> : null } 
        <button style={{maxWidth: '200px', maxHeight: '70px', minWidth: '130px', minHeight: '70px'}} class="myButton" onClick={this.handleShow}>Start</button>
        <button style={{maxWidth: '200px', maxHeight: '70px', minWidth: '130px', minHeight: '70px'}} class="myButton" onClick={this.handleHide}>Stop</button>
               </p>
            </header>
        </div>
        );
   }

}


function Stop_function()
{
  let difference = window.found.filter(x => !window.allSolutions.includes(x)).concat(window.allSolutions.filter(x => !window.found.includes(x)));
  console.log(difference);
  if(difference.length <= 1){
    alert("No remaining word to display");
  }
  else{
    swal(
      <div>
        <h1>These are the remaining words!</h1>
        <p>
          {difference.join(', ')}
        </p>
        </div>
      )
  }
  hide(document.querySelector('.timer'));

}

function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}


function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

export default App;
