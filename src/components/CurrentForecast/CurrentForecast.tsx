import React, { useEffect } from 'react'
import { getCurrentForecastData, getPlaceName, isLoading } from "../../store/currentForecast/selectors";
import { loadCurrentForecastByCoords, loadCurrentForecastByName } from "../../store/currentForecast/slice";
import { useDispatchReduxThunk, useReduxSelector } from "../../store/hooks";

import CurrentDayForecastCard from '../CurrentDayForecastCard/CurrentDayForecastCard'
import PlaceNotFound from '../PlaceNotFound/PlaceNotFound';
import Preloader from '../Preloader/Preloader';

interface Props {
  searchName?: string,
  coords?: GeolocationCoordinates | null,
  setBackground: (status: number) => void;
}

const CurrentForecast: React.FC<Props> = ({
  searchName,
  coords,
  setBackground,
}) => {

  const dispatch = useDispatchReduxThunk();
  const select = useReduxSelector;

  useEffect(() => {
    if (searchName) dispatch(loadCurrentForecastByName(searchName))
    else if (coords) dispatch(loadCurrentForecastByCoords(coords))
    else dispatch(loadCurrentForecastByName('London'));
  }, [searchName, coords]);

  const forecast = select(getCurrentForecastData);
  const placeName = select(getPlaceName);
  const isDataLoading = select(isLoading);

  useEffect(() => {
    if (forecast) {
      setBackground(forecast.weather[0].id)
    };
  }, [forecast]);

  return (
    <section >
      {isDataLoading
        ? <Preloader />
        : forecast
          ? <CurrentDayForecastCard
            data={forecast}
            placeName={placeName}
          />
          : <PlaceNotFound />
      }
    </section>
  )
}

export default CurrentForecast;
