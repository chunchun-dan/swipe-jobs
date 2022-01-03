// @flow
import * as React from 'react';

type Props = {
  imageUrl: string,
  name: string,
  companyName: string
};

const Title = ({
  imageUrl,
  name,
  companyName
}: Props): React.Node => {
  return(
    <div>
        <img src={imageUrl} alt="job title"/>
        <div>
          {name}
        </div>
        <div>
          {companyName}
        </div>
      </div>
  )
}

export default Title;
