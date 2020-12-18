import Clipboard from "clipboard"
import { Tooltip } from "bootstrap/dist/js/bootstrap"

function generatePassword(length = 8, int = true, down = true, up = false, spec = false) {
	let result = ""
	const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	const min = "abcdefghijklmnopqrstuvwxyz"
	const num = "0123456789"
	const specials = "%$*=#&-_+~^@£€µ!?:/'([)]}|`"
	length = parseInt(length)
	let characters = ""
	if (int) characters += num
	if (down) characters += min
	if (up) characters += maj
	if (spec) characters += specials
	const charactersLength = characters.length
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}

const result = document.getElementById("result-input")
const displayLength = document.getElementById("passwd-length-display")
const passwordLength = document.getElementById("passwd-length")

const withNumbers = document.getElementById("withNumbers")
const withLowers = document.getElementById("withLowers")
const withUppers = document.getElementById("withUppers")
const withSymbols = document.getElementById("withSymbols")
const generateButton = document.getElementById("generate-button")

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (copyButton) {
	return new Tooltip(copyButton)
})

const handleLengthChange = () => {
	passwordLength.addEventListener("change", (e) => {
		e.stopPropagation()
		displayLength.innerHTML = e.target.value
	})
}

const handleGenerate = () => {
	generateButton.addEventListener("click", (e) => {
		e.stopPropagation()
		const password = generatePassword(
			passwordLength.valueAsNumber,
			withNumbers.checked,
			withLowers.checked,
			withUppers.checked,
			withSymbols.checked
		)
		result.value = password
	})
}

const handleCopy = () => {
	const clipboard = new Clipboard("#pick-button")
}

handleLengthChange()

handleGenerate()

handleCopy()

// function random() {
//   const array = new Uint8Array(20);

//   const cryptedArray = crypto.getRandomValues(array);

//   let rounds = array[Math.floor(Math.random() * cryptedArray.length)];
//   let id;

//   while (rounds > 0) {
//     id = makeid(18, true, true, true);
//     rounds--;
//   }
//   return id;
// }

// console.log(random());
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// console.log(getRandomLower());

// //console.log(makeid(24, false, true, true, true));

// /*function shuffle(array) {
//      let counter = array.length;

//      // While there are elements in the array
//      while (counter > 0) {
//          // Pick a random index
//          let index = Math.floor(Math.random() * counter);

//          // Decrease counter by 1
//          counter--;

//          // And swap the last element with it
//          let temp = array[counter];
//          array[counter] = array[index];
//          array[index] = temp;
//      }

//      return array;
//  }*/

// //console.log(random(shuffle(makeid(18, true, true, true).split("")).join("")))
