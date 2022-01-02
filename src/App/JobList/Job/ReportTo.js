import * as React from 'react';

type Props = {
  name: string,
  phone: string,
};

const ReportTo = ({
  name,
  phone,
}: Props) => {
  return(
    <div>
      <div>
        <i className="fas fa-user-circle"></i>
      </div>
      <div>
        <div>
          {'Report To'}
        </div>
        <div>
          {`${name} ${phone ?? ''}`}
        </div>
      </div>
    </div>
  );
}

export default ReportTo;
