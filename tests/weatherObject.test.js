/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
// var WeatherObject = require('../src/weatherDataObject');
import WeatherObject from '../src/weatherDataObject'

let weatherObject = new WeatherObject(100, 1039, 50, '2019-01-22');

describe('Weather Object', function() {
  it('creates an Weather Object instance', function() {
    expect(weatherObject).toBeInstanceOf(WeatherObject);
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
