import config from './config.js'
import data from './data.js'
import { updateCurrentData, updateMainContents, updateStatus } from './util.js'
import { getFlightsElement } from './template.js'

const app = document.querySelector(`.app`)
const directionButton = app.querySelector(`#direction`)
const delayedButton = app.querySelector(`#delayed`)
const refreshButton = app.querySelector(`#refresh`)

const updateButtons = () => {
  (config.DIRECTION === `departures`)
    ? directionButton.innerText = `показать прилёт`
    : directionButton.innerText = `показать вылет`;

  (config.SHOW_DELAYED === true)
    ? delayedButton.innerText = `показать все`
    : delayedButton.innerText = `показать задержанные`
}

const updateControlsText = () => {
  updateStatus()
  updateButtons()
}

const directionButtonHandler = () => {
  (config.DIRECTION === `departures`)
    ? config.DIRECTION = `arrivals`
    : config.DIRECTION = `departures`
  updateCurrentData(data)
  updateMainContents(
    getFlightsElement(config.currentData)
  )
  updateControlsText()
}

const delayedButtonHandler = () => {
  (config.SHOW_DELAYED === true)
    ? config.SHOW_DELAYED = false
    : config.SHOW_DELAYED = true
  updateCurrentData(data)
  updateMainContents(
    getFlightsElement(config.currentData)
  )
  updateControlsText()
}

const refreshButtonHandler = () => {
  updateMainContents(
    getFlightsElement(config.currentData)
  )
}

export const initButtonHandlers = () => {
  directionButton.addEventListener(`click`, () => {
    directionButtonHandler()
  })
  delayedButton.addEventListener(`click`, () => {
    delayedButtonHandler()
  })
  refreshButton.addEventListener(`click`, () => {
    refreshButtonHandler()
  })
}
