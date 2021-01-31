// Letters
const letters = 'abcdefgkhijklmnopqrstuvwzy';
//Get Arrsy from Letters
let lettersArray = Array.from(letters);
// Select letters container
let letterContainer = document.querySelector('.letters');
// Generate Letters
lettersArray.forEach((letter) => {
	// create span
	let span = document.createElement('span');
	//create letter text node
	let theletter = document.createTextNode(letter);
	//append the letter to span
	span.appendChild(theletter);
	// add class on span
	span.className = 'letters-box';
	//append span to the letter container
	letterContainer.appendChild(span);
});
// oject of words + categories
const words = {
	programing: ['PHP', 'JavaScript ', 'Go', 'Scala', 'Fortran', 'Python', 'CSS'],
	movies: ['Prestige', 'Inception', 'Parasite', 'Interstellar', 'Whiplash', 'Memento', 'Coco', 'Up', 'Einstein'],
	people: ['Albert Einstein', 'Elda7e7', 'Osama Elzero', 'EBrahim aedil', 'Mahatma Ghandi'],
	contries: ['Syria', 'palestine', 'Yemen', 'Egypt', 'Bhrain', 'Qater']
};
//get random property
let AllKeys = Object.keys(words);
//random number depend on keys lenght
let randomPropNumper = Math.floor(Math.random() * AllKeys.length);
//category
let randomPropName = AllKeys[randomPropNumper];
//category words
let randomPropValue = words[randomPropName];
//random number depend on words
let randomValueNumper = Math.floor(Math.random() * randomPropValue.length);
//the choosen words
let randomValueValue = randomPropValue[randomValueNumper];
console.log(randomValueValue);
//set category info
document.querySelector('.game-info .category span').innerHTML = `${randomPropName}`;
//select letters guess element
let lettersGuessContainer = document.querySelector('.letters-guess');
//Convert Chosen Word To Araay
let lettersAndSpace = Array.from(randomValueValue);
/////////////////////////////////////////////////////////

// Congratolation = () => {
// 	document.addEventListener('click', (e) => {
// 		e.target.Value === randomValueValue ? console.log('y') : console.log('no');
// 		console.log(randomValueValue);
// 		//Create Popup Div
// 		let div = document.createElement('div');
// 		//Create Text
// 		let divText = document.createTextNode(`Congratolation , The Word Is ${randomValueValue} `);
// 		// console.log(randomValueValue);
// 		// console.log(div);
// 		//Append Text To Div
// 		div.appendChild(divText);
// 		//Add Class On The Div
// 		div.classList = 'Congratolation';
// 		//Append To The Body
// 		document.body.appendChild(div);
// 		//change Valeu To new var
// 		let Value = Array.from(randomValueValue);
// 		// change Array to Oject
// 		Value = new Array(randomValueValue);
// 		console.log(Value);
// 		// randomValueValue.length === Value.length ? Congratolation() : console.log('no');
// 		// console.log(randomValueValue);
// 	});
// };
// Congratolation();
//////////////////////////////////////////////////////

//create spans depend on word
lettersAndSpace.forEach((letter) => {
	// create Empty span
	let emptySpan = document.createElement('span');
	// if letter is space
	letter === ' ' ? (emptySpan.className = 'with-space') : '';
	//append  span to the letter guess container
	lettersGuessContainer.appendChild(emptySpan);
	// console.log(lettersGuessContainer);
});
//select guess span
let letters_guess = document.querySelectorAll('.letters-guess span');
//Set Wrong Attempts
let WorngAttempts = 0;
// Select The Drwo Element
let TheDrow = document.querySelector('.hangman-draw');
//Handil Clicking on letters
document.addEventListener('click', (e) => {
	//set the chose status
	let thStatus = false;
	if (e.target.className === 'letters-box') {
		e.target.classList.add('clicked');

		// get clicked letter
		let theclickedlitter = e.target.innerHTML.toLowerCase();
		console.log(theclickedlitter);
		// the choseen word // the shosen word
		let thechosenword = Array.from(randomValueValue.toLowerCase());
		// let Data = thechosenword;

		thechosenword.forEach((wordLetter, WordIndex) => {
			//if the clicked letter equal to one  of hte chosen word leter
			if (theclickedlitter == wordLetter) {
				//Set Status To Correct
				thStatus = true;
				//All On All Guess Span
				letters_guess.forEach((span, spanIndex) => {
					if (WordIndex === spanIndex) {
						span.innerHTML = theclickedlitter;
					}
				});
			}
		});
		//OutSide Loop
		//If Letter Is Wrong
		if (thStatus !== true) {
			//Increase Is Wrong
			WorngAttempts++;
			//Add Class Wrong On The Draw Element
			TheDrow.classList.add(`Wrong-${WorngAttempts}`);
			// console.log(WorngAttempts);
			// Play Fail Sound
			// document.getElementById('fsaf').play();
			if (WorngAttempts === 8) {
				endGame();
				letterContainer.classList.add('finished');
				// console.log(letterContainer);
			}
		} else {
			// Play success Sound
			// document.getElementById('success').play();
		}
	}
});

//End game Function
// endGame = () => {
// 	//Create Popup Div
// 	let div = document.createElement('div');
// 	//Create Text
// 	let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue} `);
// 	//Append Text To Div
// 	div.appendChild(divText);
// 	//Add Class On The Div
// 	div.classList = 'popup';
// 	//Append To The Body
// 	document.body.appendChild(div);
// };
// endGame = () => {
// 	var ShowMaseg = 'afjsfkjshfkjsahfjkhsjgk',
// 	var typeAuto = setInterval(() => {
// 		i = 0;
// 		let divText = (document.createTextNode('Game Over , The Word Is') += ShowMaseg[i]);
// 		i = i + 1;
// 		//Create Popup Div
// 		let div = document.createElement('div');
// 		//Create Text
// 		// let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue} `);

// 		//Append Text To Div
// 		div.appendChild(divText);
// 		//Add Class On The Div
// 		div.classList = 'popup';
// 		//Append To The Body
// 		document.body.appendChild(div);
// 	}, 1000);
// }

//End game Function
endGame = () => {
	// Create Popup Div
	let div = document.createElement('div');
	//Create Text
	let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue} `);
	//Append Text To Div
	div.appendChild(divText);
	//Add Class On The Div
	div.classList = 'popup';
	//Append To The Body
	document.body.appendChild(div);
};
// End game Function
// endGame = () => {
// 	setInterval(() => {
// 		// let text = 'Game Over , The Word Is';
// 		let i = 0;
// 		//Create Popup Div
// 		let div = document.createElement('div');
// 		//Create Text
// 		let divText = document.createTextNode(`ada${randomValueValue} `);
// 		//Append Text To Div
// 		div.appendChild(divText);
// 		//Add Class On The Div
// 		div.classList = 'popup';
// 		//Append To The Body
// 		document.body.appendChild(div);
// 		text.textContent += text;
// 		i++;
// 	}, 10000);
// };
