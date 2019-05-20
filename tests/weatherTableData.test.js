/* eslint-disable no-undef */
'use strict';
import WeatherTableData from '../src/weatherTableData';

let weatherDataObject = {
  temperature: 20,
  pressure: 1039,
  humidity: 50,
  date: '2019-01-22'
};

describe('weather table', function() {
  it('creates a table instance', function() {
    expect(new WeatherTableData()).toBeInstanceOf(WeatherTableData);
  });

  it('adds an article to the list', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.list).toHaveLength(1);
  });

  it('retrieves an article from the list', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    let weatherObject = weatherTableData.list.pop();
    expect(weatherObject).toEqual(weatherDataObject);
  });

  it('retrieves all articles from the list', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.getTableData()).toHaveLength(2);
  });
});
