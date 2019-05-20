/* eslint-disable no-undef */
class WeatherTableData {
  constructor() {
    this.list = [];
  }

  addData(weatherRecord) {
    this.list.push(weatherRecord);
  }

  getRecord(id) {
    let result = this.list.filter(record => record.getId() == id);
    return result[0];
  }

  getTemperatureData() {
    let result = this.list.map(record => record.temperature);
    return result;
  }

  getHumidityData() {
    let result = this.list.map(record => record.humidity);
    return result;
  }

  getPressureData() {
    let result = this.list.map(record => record.pressure);
    return result;
  }

  getDatesData() {
    let result = this.list.map(record => record.date);
    return result;
  }

  getTableData() {
    return this.list;
  }
}

export default WeatherTableData;
