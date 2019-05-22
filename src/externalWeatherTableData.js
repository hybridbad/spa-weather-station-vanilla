/* eslint-disable no-undef */

class ExternalWeatherTableData {
  constructor() {
    this.list = [];
  }

  addData(weatherRecord) {
    this.list.push(weatherRecord);
  }

  getTableData() {
    return this.list;
  }

  getTimeData() {
    let result = this.list.map(record => record.time);
    return result
  }

  getSummaryData() {
    let result = this.list.map(record => record.summary);
    return result
  }

  getPrecipIntensityData() {
    let result = this.list.map(record => record.precipIntensity);
    return result
  }
  
  getPrecipProbabilityData() {
    let result = this.list.map(record => record.precipProbability);
    return result
  }

}

export default ExternalWeatherTableData;
