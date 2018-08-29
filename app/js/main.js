import { updateMainContents, updateStatus, updateCurrentData, updateButtons } from './util.js'
import { initSearchHandler } from './search.js'
import data from './data.js'
import { getFlightsElement } from './template.js'
import config from './config.js'

updateCurrentData(data)
updateStatus()
updateMainContents(getFlightsElement(config.currentData))
initSearchHandler()

const directionButton = document.querySelector(`#direction`)
directionButton.addEventListener(`click`, () => {
  (config.DIRECTION === `departures`)
    ? config.DIRECTION = `arrivals`
    : config.DIRECTION = `departures`
  updateCurrentData(data)
  updateMainContents(getFlightsElement(config.currentData))
  updateStatus()
  updateButtons()
})

const delayedButton = document.querySelector(`#delayed`)
delayedButton.addEventListener(`click`, () => {
  (config.SHOW_DELAYED === true)
    ? config.SHOW_DELAYED = false
    : config.SHOW_DELAYED = true
  updateCurrentData(data)
  updateMainContents(getFlightsElement(config.currentData))
  updateStatus()
  updateButtons()
})
