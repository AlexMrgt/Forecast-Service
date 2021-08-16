import moment from 'moment';

const _isCurrentDay = (timestamp: number) => {
  return moment().format("MMM Do YY")  ===  moment.unix(timestamp).format("MMM Do YY");
}

const convertTimestampToCurrentDate = (timestamp: number) => {
  return moment.unix(timestamp).format(" MMMM Do YYYY");
}

const convertTimestampToCurrentTime = (timestamp: number) => {
  return moment.unix(timestamp).format("hh:mm:ss a");
}

const convertTimestampToTheDayOfTheWeek = (timestamp: number) => {
  return _isCurrentDay(timestamp)? 'Today' : moment.unix(timestamp).format("dddd");
}

const convertKelvinToCelsius = (kelvinDeg: number) => Math.round(kelvinDeg - 273.15);

const uppercaseFirstLetter = (str:string) => {
  return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
}

export {
  convertTimestampToCurrentDate,
  convertTimestampToCurrentTime,
  convertTimestampToTheDayOfTheWeek,

  convertKelvinToCelsius,
  uppercaseFirstLetter
}
