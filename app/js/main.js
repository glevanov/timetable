import { updateFlightsTable, updateStatus, updateCurrentData } from './util.js'

updateCurrentData()
updateStatus()
updateFlightsTable()

const searchForm = document.querySelector(`.search`);
searchForm.addEventListener(`submit`, (evt) => {
  evt.preventDefault();
  console.log(`I submit!`);
});

const directionButton = document.querySelector(`.filter__direction`);
directionButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  console.log(`I direct!`);
});

const delayedButton = document.querySelector(`.filter__delayed`);
delayedButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  console.log(`I delay!`);
});
