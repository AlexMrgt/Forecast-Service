import React from "react";
import { convertKelvinToCelsius, convertTimestampToCurrentDate, uppercaseFirstLetter } from "../../utils/utils";
import { CurrentForecastData } from "../../utils/interfaces";
//components
import TransparentContainer from "../TransparentContainer/TransparentContainer";
import CurrentTemperature from "../CurrentTemperature/CurrentTemperature";
import Wind from "../Wind/Wind";
import ParamsGridContainer from "../ParamsGridContainer/ParamsGridContainer";
import Parameter from "../Parameter/Parameter";

import './CurrentDayForecastCard.css';

interface Props {
  data: CurrentForecastData,
  placeName: string,
}

const CurrentDayForecastCard: React.FC<Props> = ({
  data,
  placeName,
}) => {

  return (

    <TransparentContainer>
      <div className='day-forecast'>
        <p className='day-forecast__parameter day-forecast__parameter_date'>
          {convertTimestampToCurrentDate(data.dt)}
        </p>

        <h2 className='day-forecast__title' >
          {uppercaseFirstLetter(placeName)}
        </h2>

        <div className='day-forecast__degs-image-container'>
          <CurrentTemperature temperature={convertKelvinToCelsius(data.temp)} />
          <div className='day-forecast__image-container'>
            <p className='day-forecast__clarification'>
              {data.weather[0].description}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt='weather icon'
              className='day-forecast__icon'
            />
          </div>
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
          {data.rain && <Parameter
            name='precipitation'
            data={data.rain['1h']}
            units='mm/h'
          />
          }
        </ParamsGridContainer>

      </div>
    </TransparentContainer>

  )
}

export default CurrentDayForecastCard;

