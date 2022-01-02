import * as React from 'react';

type Props = {
  address: string,
  distance: string,
};

const Location = ({
  address,
  distance,
}: Props) => {
  return(
    <div>
      <div>
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div>
        <div>
          {'Location'}
        </div>
        <div>
          {address}
        </div>
        <div>
          {`${distance} miles from your job search location`}
        </div>
      </div>
      <div>
        {'arrow right icon'}
      </div>
    </div>
  )
}

export default Location;