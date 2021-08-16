import React from 'react'

import './CurrentTemperature.css';

interface Props {
  temperature: number,
}

const CurrentTemperature: React.FC<Props> = ({
  temperature
}) => {
  return (
    <div className='temperature'>
      <p className='temperature__value'>
        {temperature}
      </p>

      <div className='temperature__unit-container'>
        <span className='temperature__unit'>
          &deg;C
        </span>
      </div>

    </div>

  )
}

export default CurrentTemperature;
