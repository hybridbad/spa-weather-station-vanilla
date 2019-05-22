/* eslint-disable no-undef */
/* eslint-disable no-console */
'use strict';
import HourlyExternalWeatherObject from '../src/externalWeatherDataObject';

let externalWeatherObject = new HourlyExternalWeatherObject(1558519323, 'Partly Cloudy', 50, 20);

describe('External Weather Object', function() {

  it('creates an External Weather Object instance', function() {
    expect(externalWeatherObject).toBeInstanceOf(HourlyExternalWeatherObject);
  });

  it('returns time', function() {
    expect(externalWeatherObject.getTime()).toEqual(1558519323);
  });

  it('returns a summary of the weather', function() {
    expect(externalWeatherObject.getSummary()).toEqual('Partly Cloudy');
  });

  it('returns the precipitation probability', function() {
    expect(externalWeatherObject.getPrecipProbability()).toEqual(50);
  });

  it('returns the precipitation intensity', function(){
    expect(externalWeatherObject.getPrecipIntensity()).toEqual(20);
  })
  
});
