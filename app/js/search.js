import { updateMainContents, getDataByID } from './util.js'
import { getFlightsElement } from './template.js'
import config from './config.js'

const searchForm = document.querySelector(`.search`)
const searchInput = searchForm.querySelector(`.search__input`)

const onSearchFormChange = () => {
  const userInput = searchInput.value
  updateMainContents(getFlightsElement(
    getDataByID(userInput, config.currentData))
  )
  searchInput.value = ``
}

export const initSearchHandler = () => {
  searchForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault()
    onSearchFormChange()
  })
}
