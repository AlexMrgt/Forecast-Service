
export interface WindDirection {
  0: number,
  1: number,
  2: string,
}

interface WeatherData {
  id: number,
  main: string,
  description: string,
  icon: string,
}

export interface CurrentForecastData {
  dt: number,
  sunrise: number,
  sunset: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: WeatherData[],
  rain: {
    ['1h']: number,
    ['3h']: number,
  }
}

export interface CurrentOneCallResponse {
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  current: CurrentForecastData,
}


export interface DailyForecastData {
  dt: number,
  sunrise: number,
  sunset: number,
  moonrise: number,
  moonset: number,
  moon_phase: number,
  temp: TempsData,
  feels_like: {
    day: number,
    night: number,
    eve: number,
    morn: number,
  },
  pressure: number,
  humidity: number,
  dew_point: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: WeatherData[],
  clouds: number,
  pop: number,
  uvi: number,
}

export interface TempsData {
  day: number,
  min: number,
  max: number,
  night: number,
  eve: number,
  morn: number,
}

export interface WeekForecastData {
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number,
  daily: DailyForecastData[]
}


export interface Direction {
  name: string,
  local_names: {
    af: string,
    ar: string,
    ascii: string,
    az: string,
    bg: string,
    ca: string,
    da: string,
    de: string,
    el: string,
    en: string,
    eu: string,
    fa: string,
    feature_name: string,
    fi: string,
    fr: string,
    gl: string,
    he: string,
    hi: string,
    hr: string,
    hu: string,
    id: string,
    it: string,
    ja: string,
    la: string,
    lt: string,
    mk: string,
    nl: string,
    no: string,
    pl: string,
    pt: string,
    ro: string,
    ru: string,
    sk: string,
    sl: string,
    sr: string,
    th: string,
    tr: string,
    vi: string,
    zu: string,
  },
  lat: number,
  lon: number,
  country: string,
}

export interface PlaceInfo {
  name: string,
  local_names: {
    af: string,
    ar: string,
    ascii: string,
    az: string,
    bg: string,
    ca: string,
    da: string,
    de: string,
    el: string,
    en: string,
    eu: string,
    fa: string,
    feature_name: string,
    fi: string,
    fr: string,
    gl: string,
    he: string,
    hi: string,
    hr: string,
    hu: string,
    id: string,
    it: string,
    ja: string,
    la: string,
    lt: string,
    mk: string,
    nl: string,
    no: string,
    pl: string,
    pt: string,
    ro: string,
    ru: string,
    sk: string,
    sl: string,
    sr: string,
    th: string,
    tr: string,
    vi: string,
    zu: string,
  },
  lat: number,
  lon: number,
  country: string,
}


