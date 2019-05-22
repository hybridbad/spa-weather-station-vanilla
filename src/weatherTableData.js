/* eslint-disable no-undef */
import DateConverter from '../services/date-processor.js';

class WeatherTableData {
  constructor() {
    this.list = [];
  }

  addData(weatherRecord) {
    this.list.push(weatherRecord);
  }

  getRecord(id) {
    let result = this.list.filter(record => record.id == id);
    return result[0];
  }

  getTemperatureData() {
    let result = this.list.map(record => record.temperature);
    return this.returnElements(result);
  }

  getHumidityData() {
    let result = this.list.map(record => record.humidity);
    return this.returnElements(result);
  }

  getPressureData() {
    let result = this.list.map(record => record.pressure);
    return this.returnElements(result);
  }

  getDatesData() {
    let result = this.list.map(record => {
      // return DateConverter.processDate(record.date);
      const date = new Date(record.date);
      return date;
    });
    return this.returnElements(result);
  }

  getTableData() {
    return this.list;
  }

  returnElements(result, size = 0) {
    return result.slice(-size);
  }
}

export default WeatherTableData;
