// import {api} from './api.mjs';
// import {Utils} from './helper-methods.js';
console.log('hi');

$(document).ready(function(){
  console.log("what");
  let dateRangePicker = {
    init: function() {
      $('.datetimepicker').datetimepicker();
      this.initial = $('#datetimepicker-initial');
      this.final = $('#datetimepicker-final');
      this.submit = $('#datetimepicker-submit');
      this.submit.click(function(){
        console.log(api);
        initial = new Date(this.initial.val());
        final = new Date(this.final.val());
        console.log(initial);
        console.log(final);
        // api.getDataByDates(initial, final);
      })
    }
  };
  dateRangePicker.init();
});


// export {dateRangePicker};