/* eslint-disable no-undef */
'use strict';
import ExternalWeatherTableData from '../src/externalWeatherTableData';

let hourlyObject = {
  time: 1558519323,
  summary: 'Cloudy',
  precipProbability: 20,
  precipIntensity: 20
}

let hourlyObject2 = {
  time: 1558519500,
  summary: 'Very Cloudy',
  precipProbability: 50,
  precipIntensity: 20
}

describe('External Weather Object', function() {

  let externalWeatherDataTable = new ExternalWeatherTableData();

  beforeEach(() => {
    externalWeatherDataTable.addData(hourlyObject)
    externalWeatherDataTable.addData(hourlyObject2)
  });
  
  afterEach(() => {
    externalWeatherDataTable.list = []
  })

  it('creates an instance of external weather table data', function() {
    expect(externalWeatherDataTable).toBeInstanceOf(ExternalWeatherTableData);
  });


  it('adds hourly weather objects', function(){
    expect(externalWeatherDataTable.list).toHaveLength(2);
  })

  it('retrieves all records from the list', function() {
    expect(externalWeatherDataTable.getTableData()).toHaveLength(2);
  });

  it('gets summary data', function(){
    expect(externalWeatherDataTable.getSummaryData()).toEqual(['Cloudy', 'Very Cloudy']);
  })

  it('gets percipitation intensity data', function() {
    expect(externalWeatherDataTable.getPrecipIntensityData()).toEqual([20, 20]);
  })

  it('gets precipitation probability data', function(){
    expect(externalWeatherDataTable.getPrecipProbabilityData()).toEqual([20, 50]);
  })

  it('gets time data', function() {
    expect(externalWeatherDataTable.getTimeData()).toEqual([1558519323, 1558519500]);
  })

  

});
