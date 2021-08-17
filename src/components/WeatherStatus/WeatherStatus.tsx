import React from 'react'
import { TempsData } from '../../utils/interfaces';

import './WeatherStatus.css';

interface Props {
  data: Partial<TempsData>,
  icon: string,
}

const WeatherStatus: React.FC<Props> = ({
  data,
  icon,
}) => {
  return (
    <div className='weather-status'>
      <p className='weather-status__extremum weather-status__extremum_max'>
        {data.max}&deg;C
      </p>
      <div className='day-forecast__image-container'>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt='weather icon'
          className='day-forecast__icon'
        />
      </div>
      <p className='weather-status__extremum weather-status__extremum_min'>
        {data.min}&deg;C
      </p>
    </div>
  )
}

export default WeatherStatus;
