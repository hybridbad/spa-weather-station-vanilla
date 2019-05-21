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
    return result.slice(-100);
  }

  getHumidityData() {
    let result = this.list.map(record => record.humidity);
    return result.slice(-100);
  }

  getPressureData() {
    let result = this.list.map(record => record.pressure);
    return result.slice(-100);
  }

  getDatesData() {
    let result = this.list.map(record => {
      let dateObj = new Date(record.date);
      let hour = this.addZero(dateObj.getHours());
      let minutes = this.addZero(dateObj.getMinutes());
      let seconds = this.addZero(dateObj.getSeconds());
      return hour + ':' + minutes + ':' + seconds;
    });
    return result.slice(-100);
  }

  getTableData() {
    return this.list;
  }

  addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
}

export default WeatherTableData;
