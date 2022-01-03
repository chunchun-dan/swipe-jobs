// @flow
import * as React from 'react';

type Props = {
  requirements: Array<string>,
};

const Requirements = ({requirements}: Props): React.Node => {
  return(
    <div>
      <div>
        <i className="fas fa-tools"></i>
      </div>
      <div>
        <div>
          {'Requirements'}
        </div>
        <div>
          {requirements.map((o, index) => {
            return(
              <div key={index}>
                {`- ${o}`}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Requirements;
