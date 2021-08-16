import React from 'react';
import { DailyForecastData, TempsData } from '../../utils/interfaces';
import { convertKelvinToCelsius, convertTimestampToCurrentDate, convertTimestampToTheDayOfTheWeek } from '../../utils/utils';
import TransparentContainer from '../TransparentContainer/TransparentContainer';
import Parameter from '../Parameter/Parameter';
import ParamsGridContainer from '../ParamsGridContainer/ParamsGridContainer';
import FullDayTemps from '../FullDayTemps/FullDayTemps';
import WeatherStatus from '../WeatherStatus/WeatherStatus';
import Wind from '../Wind/Wind';

import './WeekForecastCard.css';

type TempsDataKey = keyof TempsData;

interface Props {
  data: DailyForecastData,
}

const WeekForecastCard: React.FC<Props> = ({
  data,
}) => {

  const temps = data.temp;

  const celciusTemps = Object.keys(data.temp).reduce((acc: Partial<TempsData>, key) => {
    acc[key as TempsDataKey] = convertKelvinToCelsius(temps[key as TempsDataKey]);
    return acc;
  }, {});

  return (
    <TransparentContainer>
      <div className='week-card' >

        <div className='week-card__header-container'>

          <p className='week-card__current-day-name'>
            {convertTimestampToTheDayOfTheWeek(data.dt)}
          </p>
          <p className='week-card__current-day-date'>
            {convertTimestampToCurrentDate(data.dt)}
          </p>

        </div>
        <div className='week-card__temps-and-status-container'>
          <FullDayTemps data={celciusTemps} />
          <WeatherStatus
            data={celciusTemps}
            icon={data.weather[0].icon}
          />
        </div>
        <Wind
          windSpeed={data.wind_speed}
          windDirection={data.wind_deg}
          windGust={data.wind_gust}
        />
        <ParamsGridContainer title='additional info'>
          <Parameter
            name='humidity'
            data={data.humidity}
            units='%'
          />
          <Parameter
            name='pressure'
            data={data.pressure}
            units='hPa'
          />
        </ParamsGridContainer>

      </div>
    </TransparentContainer>
  )
}

export default WeekForecastCard;
