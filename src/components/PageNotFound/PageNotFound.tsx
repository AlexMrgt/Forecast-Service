import { Link } from 'react-router-dom';
import { pageNotFoundAboutText, pageNotFoundHeaderText, pageNotFoundReturnButtonText } from '../../utils/constants';
import TransparentContainer from '../TransparentContainer/TransparentContainer';

import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <section className='page-not-found'>
      <TransparentContainer >
        <div className='page-not-found__container'>
          <h2 className='page-not-found__title'>
            {pageNotFoundHeaderText}
          </h2>
          <p className='page-not-found__about'>
            {pageNotFoundAboutText}
          </p>
          <Link
            className='page-not-found__link'
            to='/'
          >
            {pageNotFoundReturnButtonText}
          </Link>
        </div>
      </TransparentContainer>
    </section>
  )
}

export default PageNotFound;
