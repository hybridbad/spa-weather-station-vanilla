'use strict';

import { Home, ShowChart, Error404 } from './views/pages/pages.mjs';
import Utils from './services/helper-methods.js';
import {api} from './services/api.mjs';

const routes = {
  '/': Home,
  '/charts': ShowChart
};

const router = function() {
  const content = null || document.getElementById('page_container');

  //Get the request object : {resource, id} elements
  let request = Utils.parseRequestURL();

  //Parse url - if it has id route to resource/id
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '');

  //Get the page from the routes - If parsed page is not in the routes - select 404 page

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content.innerHTML = page.render();

  return parsedURL;
};

const onLoad = function() {
  
  console.log("what");
  let dateRangePicker = {
    init: function() {
      const that = this;
      $('.datetimepicker').datetimepicker();
      this.initial = $('#datetimepicker-initial');
      this.final = $('#datetimepicker-final');
      this.submit = $('#datetimepicker-submit');
      this.submit.click(function(){
        const initial = new Date(that.initial.val());
        const final = new Date(that.final.val());
        console.log(final);
        api.getDataByDates(initial, final);
      })
    }
  };
  dateRangePicker.init();

  router();
}
window.addEventListener('load', onLoad);

window.addEventListener('hashchange', router);
