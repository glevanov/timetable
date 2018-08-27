import { updateFlightsTable, updateStatus, updateCurrentData } from './util.js'
import { initSearchHandler } from './search.js'
import data from './data.js'

updateCurrentData(data)
updateStatus()
updateFlightsTable()
initSearchHandler()

const directionButton = document.querySelector(`.filter__direction`)
directionButton.addEventListener(`click`, (evt) => {
  evt.preventDefault()
  console.log(`I direct!`)
})

const delayedButton = document.querySelector(`.filter__delayed`)
delayedButton.addEventListener(`click`, (evt) => {
  evt.preventDefault()
  console.log(`I delay!`)
})
