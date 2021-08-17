import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useRouteMatch, } from 'react-router-dom';
import { routesWithoutHeader } from "../../utils/constants";
//components
import Header from "../Header/Header";
import WeekForecast from "../WeekForecast/WeekForecast";
import CurrentForecast from "../CurrentForecast/CurrentForecast";
import PageNotFound from "../PageNotFound/PageNotFound";

import './App.css';

const App = () => {

  const [coords, setCoords] = useState<GeolocationCoordinates | null>(null);
  const [searchRequest, setSearchRequest] = useState<string>('');

  const [backgroundImageModificator, setBackgroundImageModificator] = useState('clear');

  const successSearch = (pos: GeolocationPosition) => {

    const coords = pos.coords;
    setCoords(coords)
  };

  const errorSearch = (err: GeolocationPositionError) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);

  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(successSearch, errorSearch);
  }

  const handleSearchSubmit = (place: string) => {
    setSearchRequest(place);
  }

  const setBackgroundImageState = (weatherStatus: string) => {

    setBackgroundImageModificator(weatherStatus.toLowerCase() || 'clear');
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className={`app app_${backgroundImageModificator}`}>

      {useRouteMatch(routesWithoutHeader)
        ? null
        : (
          <Header onSearchSubmit={handleSearchSubmit} />
        )
      }

      <Switch >

        <Route
          path='/'
          exact
        >
          <CurrentForecast
            setBackground={setBackgroundImageState}
            coords={coords}
            searchName={searchRequest}
          />
        </Route>

        <Route
          path='/weekly'
          exact
        >
          <WeekForecast
            coords={coords}
            searchName={searchRequest}
          />
        </Route>

        <Route path='*'>
          <Redirect to='/not-found' />
        </Route>

      </Switch>

      <Route
        path='/not-found'
        exact
      >
        <PageNotFound />
      </Route>

    </div>
  );
}

export default App;
