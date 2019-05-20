/* eslint-disable no-undef */
'use strict';

class WeatherDataObject {
  constructor(temperature, pressure, humidity, date) {
    this.temperature = temperature;
    this.pressure = pressure; //change this to title
    this.humidity = humidity;
    this.date = date; //test this
  }

  getTemperature() {
    return this.temperature;
  }

  getPressure() {
    return this.pressure;
  }

  getHumidity() {
    return this.humidity;
  }

  getDate() {
    return this.date;
  }
}

export default WeatherDataObject;
