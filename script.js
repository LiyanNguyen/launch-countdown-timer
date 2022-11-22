let days = 8
let hours = 23
let mins = 55
let sec = 41

const daysDisplay = document.querySelector("#daysDisplay");
const hoursDisplay = document.querySelector("#hoursDisplay");
const minsDisplay = document.querySelector("#minsDisplay");
const secDisplay = document.querySelector("#secDisplay");

daysDisplay.innerText = days.toString();
hoursDisplay.innerText = hours.toString();
minsDisplay.innerText = mins.toString();
secDisplay.innerText = sec.toString()

setInterval(() => {
	sec--
	secDisplay.innerText = sec.toString();
	secDisplay.previousElementSibling.classList.toggle("flip")
	secDisplay.nextElementSibling.classList.toggle("flip");

	if (sec === 0) {
		mins--;
		minsDisplay.innerText = mins.toString();
		minsDisplay.previousElementSibling.classList.toggle("flip");
    minsDisplay.nextElementSibling.classList.toggle("flip");
		sec = 60

		if (mins === 0) {
			hours--
			hoursDisplay.innerText = hours.toString();
			hoursDisplay.previousElementSibling.classList.toggle("flip");
      hoursDisplay.nextElementSibling.classList.toggle("flip");
      mins = 60;

			if (hours === 0) {
				days--
				daysDisplay.innerText = days.toString();
				daysDisplay.previousElementSibling.classList.toggle("flip");
        daysDisplay.nextElementSibling.classList.toggle("flip");
        hours = 24;
			}
		}
	}
}, 1000);