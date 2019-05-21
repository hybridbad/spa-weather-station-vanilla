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
    return this.returnElements(result, 100);
  }

  getHumidityData() {
    let result = this.list.map(record => record.humidity);
    return this.returnElements(result, 100);
  }

  getPressureData() {
    let result = this.list.map(record => record.pressure);
    return this.returnElements(result, 100);
  }

  getDatesData() {
    let result = this.list.map(record => {
      return DateConverter.processDate(record.date);
    });
    return this.returnElements(result, 100);
  }

  getTableData() {
    return this.list;
  }

  returnElements(result, size) {
    return result.slice(-size);
  }
}

export default WeatherTableData;
