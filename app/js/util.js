import data from './data.js';
import config from './config.js';
import {getStatusElement, getFlightsElement} from './template.js';

const app = document.querySelector(`.app`);

export const createElement = (templateText) => {
    const element = document.createElement(`div`);
    element.innerHTML = templateText.trim();
    return element.firstElementChild;
};

export const updateStatus = () => {
    const filterElement = app.querySelector(`.filter`);
    const statusElement = filterElement.querySelector(`.filter__status`);
    const updatedStatus = getStatusElement();
    filterElement.replaceChild(updatedStatus, statusElement);
};

export const updateFlightsTable = () => {
    const main = app.querySelector(`.main`);
    const listElement = main.querySelector(`.flights`);
    const updatedList = getFlightsElement(config.currentData);
    main.replaceChild(updatedList, listElement);
};

export const updateCurrentData = () => {
    let updatedData = [];
    for (let i = 0; i < config.MAX_FLIGHT_ENTRIES; i++) {
        updatedData.push(data[config.DIRECTION][i]);
    }
    config.currentData = updatedData;
};