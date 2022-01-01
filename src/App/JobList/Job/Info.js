import * as React from 'react';

type Props = {
  distance: string,
  hourlyRate: float,
};

const Info = ({
  distance,
  hourlyRate
}: Props) => {
  return(
    <div>
        <div>
          <div>
            {'Distance'}
          </div>
          <div>
            {`${distance} miles`}
          </div>
        </div>
        <div>
          <div>
            {'hourly Rate'}
          </div>
          <div>
            {`$${hourlyRate}`}
          </div>
        </div>
      </div>
  )
}

export default Info;
