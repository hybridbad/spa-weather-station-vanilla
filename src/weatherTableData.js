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

  // getTemperature()
  // getPressure()
  // getHumidity

  getTableData() {
    return this.list;
  }
}
// module.exports = WeatherTableData;
export default WeatherTableData;
