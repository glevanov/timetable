import config from './config.js'
import { getStatusElement, getFlightsElement } from './template.js'

const app = document.querySelector(`.app`)

export const createElement = (templateText) => {
  const element = document.createElement(`div`)
  element.innerHTML = templateText.trim()
  return element.firstElementChild
}

export const updateStatus = () => {
  const filterElement = app.querySelector(`.filter`)
  const statusElement = filterElement.querySelector(`.filter__status`)
  const updatedStatus = getStatusElement()
  filterElement.replaceChild(updatedStatus, statusElement)
}

export const updateFlightsTable = () => {
  const main = app.querySelector(`.main`)
  const listElement = main.querySelector(`.flights`)
  const updatedList = getFlightsElement(config.currentData)
  main.replaceChild(updatedList, listElement)
}

const getDelayedOnly = (arr) => {
  return arr.filter(it => it.status === `Задержан`)
}

const getDataForDirection = (data) => {
  return data[config.DIRECTION]
}

export const updateCurrentData = (data) => {
  let updatedData;
  (config.SHOW_DELAYED)
    ? updatedData = getDelayedOnly(getDataForDirection(data))
    : updatedData = getDataForDirection(data)

  config.currentData = updatedData.slice(0, config.MAX_FLIGHT_ENTRIES)
}
