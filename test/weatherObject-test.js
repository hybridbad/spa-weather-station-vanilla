/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
var WeatherObject = require('../src/weatherDataObject');

var { describe, it, expect } = require('../services/testing-framework');

let weatherObject = new WeatherObject(100, 1039, 50, '2019-01-22');

describe('Weather Object', function() {
  it('creates an Weather Object instance', function() {
    expect(weatherObject).toBeInstanceof(WeatherObject);
  });

  it('responds to getTemperature method', function() {
    expect(weatherObject).toRespondTo('getTemperature');
  });

  it('responds to getPressure method', function() {
    expect(weatherObject).toRespondTo('getPressure');
  });
  it('responds to getHumidity method', function() {
    expect(weatherObject).toRespondTo('getHumidity');
  });

  it('responds to getDate method', function() {
    expect(weatherObject).toRespondTo('getDate');
  });

  it('returns temperature value', function() {
    expect(weatherObject.getTemperature()).toEqual(100);
  });
  it('returns pressure value', function() {
    expect(weatherObject.getPressure()).toEqual(1039);
  });

  it('returns humidity value', function() {
    expect(weatherObject.getHumidity()).toEqual(50);
  });
  it('returns date value', function() {
    expect(weatherObject.getDate()).toEqual('2019-01-22');
  });
});
