/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
import DateConverter from '../services/date-processor';

describe('Date converter', function() {
  // let converter = new DateConverter();
  let testDate = 1558519323;

  it('processes a date', function() {
    expect(DateConverter.processDate(testDate)).toEqual('01:55:19')
  })

})