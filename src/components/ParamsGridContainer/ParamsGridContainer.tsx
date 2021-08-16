import React from 'react'

import './ParamsGridContainer.css';

interface Props {
  title: string,
}

const ParamsGridContainer: React.FC<Props> = ({
  children,
  title,
}) => {
  return (
    <div className='params-container'>
      <h3 className='params-container__title'>
        {title}
      </h3>
      <div className='params-container__body'>
        {children}
      </div>
    </div>
  )
}

export default ParamsGridContainer;
