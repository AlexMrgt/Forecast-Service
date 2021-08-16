import { configureStore } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import currentForecast, { sliceName as currentForecastStoreName } from './currentForecast/slice';
import weakForecast, { sliceName as weakForecastStoreName } from './weekForecast/slice';
import { BASE_FORECAST_API_URL, BASE_GEO_API_URL } from '../utils/constants'
import ForecastApi from '../utils/open-weather-api'
import GeoApi from '../utils/open-geo-api';


const history = createBrowserHistory();

const forecastApi = new ForecastApi(BASE_FORECAST_API_URL);
const geoApi = new GeoApi(BASE_GEO_API_URL);

const store = configureStore({
  reducer: {
    [currentForecastStoreName]: currentForecast,
    [weakForecastStoreName]: weakForecast,
    router: connectRouter(history)
  },
  middleware: [
    thunk.withExtraArgument({ forecastApi, geoApi }),
    routerMiddleware(history),
  ],
})

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export type ThunkApi = {
  dispatch: AppDispatch,
  extra: {
    forecastApi: ForecastApi,
    geoApi: GeoApi,
  }
}

export {
  history,
}
