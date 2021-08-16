import React from 'react';
import { useEffect } from 'react';
import { useDispatchReduxThunk, useReduxSelector } from '../../store/hooks';
import { getPlaceName, getWeekForecast, isLoading } from '../../store/weekForecast/selectors';
import { loadWeekForecastByName, loadWeekForecastByCoords } from '../../store/weekForecast/slice';
import { uppercaseFirstLetter } from '../../utils/utils';
import PlaceNotFound from '../PlaceNotFound/PlaceNotFound';
import Preloader from '../Preloader/Preloader';
import WeekForecastCard from '../WeekForecastCard/WeekForecastCard';

import './WeekForecast.css'

interface Props {
  searchName?: string,
  coords?: GeolocationCoordinates | null,
}

const WeekForecast: React.FC<Props> = ({
  searchName,
  coords,
}) => {

  const dispatch = useDispatchReduxThunk();
  const select = useReduxSelector;

  useEffect(() => {
    if (searchName) dispatch(loadWeekForecastByName(searchName))
    else if (coords) dispatch(loadWeekForecastByCoords({ latitude: coords.latitude, longitude: coords.longitude }))
    else dispatch(loadWeekForecastByName('London'));
  }, [searchName, coords]);

  const weekForecast = select(getWeekForecast);
  const placeName = select(getPlaceName);
  const isDataLoading = select(isLoading);

  return (
    <section className='weak-forecast'>

      {!isDataLoading && weekForecast &&
        <h2 className='weak-forecast__title' >
          {uppercaseFirstLetter(placeName)}
        </h2>
      }

      {isDataLoading
        ? <Preloader />
        : <div className='weak-forecast__card-container'>
          {weekForecast
            ? weekForecast.daily.map((day) =>
              <WeekForecastCard
                key={day.dt}
                data={day}
              />)
            : <PlaceNotFound />
          }
        </div>
      }
    </section>
  )
}

export default WeekForecast;
