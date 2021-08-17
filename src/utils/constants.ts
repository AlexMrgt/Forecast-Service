import { WindDirection } from "../utils/interfaces";

const BASE_FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5';
const BASE_GEO_API_URL = 'https://api.openweathermap.org/geo/1.0';
const OPEN_WEATHER_API_KEY = '88be7aaa0b3de9eca6e6b360fb6b4eab';

const directions: WindDirection[] = [
  [348.75, 365, 'N'],
  [0, 11.25, 'N'],
  [11.25, 33.75, 'NNE'],
  [33.75, 56.25, 'NE'],
  [56.25, 78.75, 'ENE'],
  [78.75, 101.25, 'E'],
  [101.25, 123.75, 'ESE'],
  [123.75, 146.25, 'SE'],
  [146.25, 168.75, 'SSE'],
  [168.75, 191.25, 'S'],
  [191.25, 213.75, 'SSW'],
  [213.75, 236.25, 'SW'],
  [236.25, 258.75, 'WSW'],
  [258.75, 281.25, 'W'],
  [281.25, 303.75, 'WNW'],
  [303.75, 326.25, 'NW'],
  [326.25, 348.75, 'NNW'],
];

const routesWithoutHeader = [
  '/not-found',
];

const placeNotFoundHeaderText = 'Whooops...';
const placeNotFoundAboutText = `We couldn't find place you were searching for.
Most likely it's because of alpha-version of this weather service,
and so far we can't show any hints while you typing. But they will be added soon.
Don't panic and try again or serch for a place nearby.`;
const pageNotFoundHeaderText = '404';
const pageNotFoundAboutText = 'Page not found. Please, check URL-adress.';
const pageNotFoundReturnButtonText = 'Back to main';

export {
  BASE_FORECAST_API_URL,
  BASE_GEO_API_URL,
  OPEN_WEATHER_API_KEY,

  directions,
  routesWithoutHeader,

  placeNotFoundHeaderText,
  placeNotFoundAboutText,
  pageNotFoundHeaderText,
  pageNotFoundAboutText,
  pageNotFoundReturnButtonText,
}
