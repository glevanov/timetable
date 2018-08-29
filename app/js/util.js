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

export const updateMainContents = (element) => {
  const main = app.querySelector(`.main`)
  main.innerHTML = ``
  main.insertAdjacentElement(`afterbegin`, element)
}

const getDelayedData = (data) => {
  return getDirectionData(data).filter(it => it.status === `Задержан`)
}

const getDirectionData = (data) => {
  return data[config.DIRECTION]
}

export const updateCurrentData = (data) => {
  let updatedData;
  (config.SHOW_DELAYED)
    ? updatedData = getDelayedData(data)
    : updatedData = getDirectionData(data)

  config.currentData = updatedData.slice(0, config.MAX_FLIGHT_ENTRIES)
}

// TODO запилить поиск уже
export const getDataByID = (inputID, data) => {
  return data.filter(it => it.id === inputID)
}

// TODO Вынести в отдельный модуль ссылки на дом мб?
const directionButton = document.querySelector(`#direction`)
const delayedButton = document.querySelector(`#delayed`)

export const updateButtons = () => {
  (config.DIRECTION === `departures`)
    ? directionButton.innerText = `показать прилёт`
    : directionButton.innerText = `показать вылет`;

  (config.SHOW_DELAYED === true)
    ? delayedButton.innerText = `скрыть задержанные`
    : delayedButton.innerText = `показать задержанные`
}
