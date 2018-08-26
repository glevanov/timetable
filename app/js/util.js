import {flightList, status} from './template.js';

const app = document.querySelector(`.app`);

export const createElement = (templateText) => {
    const element = document.createElement(`div`);
    element.innerHTML = templateText.trim();
    return element.firstElementChild;
};

export const updateStatus = () => {
    const filterElement = app.querySelector(`.filter`);
    const statusElement = filterElement.querySelector(`.filter__status`);
    const updatedStatus = createElement(status);
    filterElement.replaceChild(updatedStatus, statusElement);
};

export const updateFlightsTable = () => {
    const main = app.querySelector(`.main`);
    const listElement = main.querySelector(`.flights`);
    const updatedList = createElement(flightList);
    main.replaceChild(updatedList, listElement);
};