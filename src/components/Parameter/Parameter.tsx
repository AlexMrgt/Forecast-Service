import React from 'react';

import './Parameter.css';

interface Props {
  name:string,
  data: number,
  units: string,
}

const Parameter: React.FC<Props> = ({
  name,
  data,
  units,
}) => {
  return (
    <p className={`parameter parameter_${name}`}>
      {data} {units}
    </p>
  )
}

export default Parameter;
