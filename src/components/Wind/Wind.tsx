import React from 'react';
import { directions } from '../../utils/constants';
import './Wind.css';


interface Props {
  windSpeed: number,
  windDirection: number,
  windGust?: number,
}

const Wind: React.FC<Props> = ({
  windSpeed,
  windDirection,
  windGust,
}) => {

  const parseWindDirection = (currentDirection: number) => {

    let directionLiteral: string = '';

    directions.forEach((direction) => {
      if ((direction[0] <= currentDirection) && (currentDirection <= direction[1])) {
        directionLiteral = direction[2];
      }
    });

    return directionLiteral ? directionLiteral : 'No defined direction';
  }

  const parseWindSpeed = (currentSpeed: number) => {

    if (currentSpeed === 0) return 'Calm'
    else if (currentSpeed > 0 && currentSpeed <= 5) return 'Weak'
    else if (currentSpeed >= 6 && currentSpeed <= 10) return 'Moderate'
    return 'Strong'
  }

  return (
    <div className='wind'>
      <div className='wind__wind-info wind__wind-info_wind'>

        <div className='wind__text-params'>
          <p className='wind__parameter'>
            {parseWindSpeed(windSpeed)}
          </p>

          <p className='wind__parameter'>
            {windSpeed} m/s
          </p>

          <p className='wind__parameter'>
            {parseWindDirection(windDirection)}
          </p>
        </div>

      </div >
      <div className='wind__wind-info wind__wind-info_gust'>
        <p className='wind__parameter'>
          {windGust ? `Up to ${windGust} m/s` : 'Without gusts'}
        </p>
      </div>
    </div>
  )
}

export default Wind;
