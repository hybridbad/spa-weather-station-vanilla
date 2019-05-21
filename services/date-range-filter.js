import {api} from './api.mjs';
// import {Utils} from './helper-methods.js';

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


export {dateRangePicker};