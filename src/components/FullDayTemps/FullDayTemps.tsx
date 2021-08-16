import React from 'react';
import { TempsData } from '../../utils/interfaces';

import './FullDayTemps.css';

interface Props {
  data: Partial<TempsData>,
}

const FullDayTemps: React.FC<Props> = ({
  data,
}) => {

  const setSign = (tempData: number | undefined) => {
    if (tempData) {
      return tempData > 0 ? '+' : '';
    }
    return '';
  }

  return (
    <ul className='temp-list'>
      <li className='temp-list__item temp-list__item_sunrise'>
        {setSign(data.morn)}
        {data.morn}&deg;C
      </li>
      <li className='temp-list__item temp-list__item_day'>
        {setSign(data.day)}
        {data.day}&deg;C
      </li>
      <li className='temp-list__item temp-list__item_evening'>
        {setSign(data.eve)}
        {data.eve}&deg;C
      </li>
      <li className='temp-list__item temp-list__item_night'>
        {setSign(data.night)}
        {data.night}&deg;C
      </li>
    </ul>
  )
}


export default FullDayTemps;
