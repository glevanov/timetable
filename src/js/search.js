import { updateMainContents, createElement } from "./util.js";
import { getFlightsElement } from "./template.js";
import config from "./config.js";
import getDataByID from "./getDataByID";

const searchForm = document.querySelector(`.search`);
const searchInput = searchForm.querySelector(`.search__input`);

const errorTemplate = `\
<p class="flights__error">К сожалению рейс <span class="flights__flight-id"></span> не найден</p>`;

const onSearchFormChange = () => {
  const userInput = searchInput.value;
  const resultData = getDataByID(userInput, config.currentData);
  if (resultData.length !== 0) {
    updateMainContents(getFlightsElement(resultData));
  } else {
    updateMainContents(createElement(errorTemplate));
    document
      .querySelector(`.flights__flight-id`)
      .insertAdjacentText(`afterbegin`, userInput);
  }
  searchInput.value = ``;
};

export const initSearchHandler = () => {
  searchForm.addEventListener(`submit`, evt => {
    evt.preventDefault();
    onSearchFormChange();
  });
};
