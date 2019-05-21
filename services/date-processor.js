const DateConverter = {
  processDate: date => {
    let dateObj = new Date(date);
    let hour = _addZero(dateObj.getHours());
    let minutes = _addZero(dateObj.getMinutes());
    let seconds = _addZero(dateObj.getSeconds());
    return hour + ':' + minutes + ':' + seconds;
  }
};

const _addZero = function(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};

export default DateConverter;
