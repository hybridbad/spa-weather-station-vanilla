'use strict';

class HourlyExternalWeatherObject {
  constructor(time, summary, precipProbability, precipIntensity){
    this.time = time;
    this.summary = summary;
    this.precipProbability = precipProbability;
    this.precipIntensity = precipIntensity;
  }

  getTime() {
    return this.time;
  }

  getSummary() {
    return this.summary;
  }

  getPrecipProbability() {
    return this.precipProbability;
  }

  getPrecipIntensity() {
    return this.precipIntensity;
  }
}

export default HourlyExternalWeatherObject;