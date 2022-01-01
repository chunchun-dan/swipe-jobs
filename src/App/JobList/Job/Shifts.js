import * as React from 'react';

type Props = {
  shifts: Array<{
    startDate: string,
    endDate: string,
  }>
}
const Shifts = ({
  jobId,
  shifts,
}: Props) => {
  return(
    <div>
      <div>
        {'calender icon'}
      </div>
      <div>
        {'Shift Dates'}
        {shifts.map((o, index) => {
          return(
            <div key={index}>
              {'date'}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shifts;
