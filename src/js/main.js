import data from "./data.js";
import config from "./config.js";
import { updateMainContents, updateStatus, updateCurrentData } from "./util.js";
import { initSearchHandler } from "./search.js";
import { initButtonHandlers } from "./buttons.js";
import { getFlightsElement } from "./template.js";

updateCurrentData(data);
updateStatus();
updateMainContents(getFlightsElement(config.currentData));
initSearchHandler();
initButtonHandlers();

import "../blocks/styles.css";
