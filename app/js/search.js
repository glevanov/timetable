const searchForm = document.querySelector(`.search`)
const searchInput = searchForm.querySelector(`.search__input`)

const onSearchFormChange = (evt) => {
  const userInput = searchInput.value
  console.log(userInput)
  searchInput.value = ``;
}

export const initSearchHandler = () => {
  searchForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault()
    onSearchFormChange(evt)
  })
}
