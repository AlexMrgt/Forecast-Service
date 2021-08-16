import React from 'react'
import './TransparentContainer.css';

const TransparentContainer: React.FC = ({
  children,
}) => {
  return (
    <article className='transparent-container'>
      {children}
    </article>
  )
}

export  default TransparentContainer;
