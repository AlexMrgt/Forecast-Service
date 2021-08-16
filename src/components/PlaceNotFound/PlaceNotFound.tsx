import { placeNotFoundAboutText, placeNotFoundHeaderText } from '../../utils/constants';
import TransparentContainer from '../TransparentContainer/TransparentContainer'

import './PlaceNotFound.css';

const PlaceNotFound = () => {
  return (
    <TransparentContainer>
      <div className='place-not-found'>
        <h2 className='place-not-found__title'>
          {placeNotFoundHeaderText}
        </h2>
        <p className='place-not-found__about'>
          {placeNotFoundAboutText}
        </p>
      </div>

    </TransparentContainer>
  )
}

export default PlaceNotFound;
