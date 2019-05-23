'use strict';

import { Home, Error404 } from './views/pages/pages.mjs';
import Utils from './services/helper-methods.js';
import {dateRangePicker} from './services/date-range-filter.js';

const routes = {
  '/': Home
};

const router = function() {

  //Get the request object : {resource, id} elements
  let request = Utils.parseRequestURL();

  //Parse url - if it has id route to resource/id
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '');

  //Get the page from the routes - If parsed page is not in the routes - select 404 page
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  
  // content.innerHTML = page.render();
  page.render();

  return parsedURL;
};

const onLoad = function() {
  
  dateRangePicker.init();

  router();
}
window.addEventListener('load', onLoad);

window.addEventListener('hashchange', router);
