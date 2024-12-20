/** @format */

const buttonsEL = document.querySelectorAll("button");
let inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEL.length; i++) {
	buttonsEL[i].addEventListener("click", () => {
		const buttonValue = buttonsEL[i].textContent;

		if (buttonValue === "C") {
			clearResult();
		} else if (buttonValue === "=") {
			calculateResult();
		} else{
			appendValue(buttonValue);
		}
	});
}

function clearResult() {
	inputFieldEl.value = "";
}

function calculateResult() {
	inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonValue) {
	inputFieldEl.value += buttonValue;
}
