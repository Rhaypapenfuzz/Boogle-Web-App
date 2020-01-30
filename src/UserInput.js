import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TextInput from './TextInput.js';

var GuessedWord;

function GetUserInput() {
	return GuessedWord;
}

function GetTextInput({promptText}) {
	const [GuessedWord, setText] = useState(/*initial state=*/ "Your Guess");

	return (
		<div>
		<TextField
			value={GuessedWord}
			onChange={(e) => setText(e.target.value)}
		/>
			<button onClick={() => GetUserInput({promptText})}>
				Enter
			</button>
			{GuessedWord}
		</div>
		);
}


export default GetUserInput;