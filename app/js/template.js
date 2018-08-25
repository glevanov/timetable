import config from './config.js';
import data from './data.js'

const STATUS_DICT = {
  departures: `вылета`,
  arrivals: `прилёта`,
  true: `с учетом задержанных рейсов`,
  false: `без учета задержанных рейсов`
}
const status = `\
<p class="filter__status">Показываем табло ${STATUS_DICT[config.DIRECTION]} ${config.AIRPORT} ${STATUS_DICT[config.SHOW_DELAYED]}</p>`

let flightItems = ``;
for (let i = 0; i < config.MAX_FLIGHT_ENTRIES; i++) {
  flightItems += `\
  <li class="flights__item">
    <div>
        <span class="flights__time">${data[config.DIRECTION][i].time}</span>
        <span class="flights__city">${data[config.DIRECTION][i].destination}</span>
    </div>
    <span class="flights__id">${data[config.DIRECTION][i].id}</span>
    <span class="flights__status">${data[config.DIRECTION][i].status}</span>
  </li>`
}
const flightList = `\
<ul class="flights">
    ${flightItems}
</ul>
`

export {status, flightList};
