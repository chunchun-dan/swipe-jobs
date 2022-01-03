// @flow
import * as React from 'react';

type Props = {
  jobId: string,
  shifts: Array<{
    startDate: string,
    endDate: string,
  }>
}
const Shifts = ({
  jobId,
  shifts,
}: Props): React.Node => {
  return(
    <div>
      <div>
      <i className="fas fa-calendar-alt"></i>
      </div>
      <div>
        {'Shift Dates'}
        {shifts.map((o, index) => {
          const startDate = new Date(o.startDate);
          const [startWeekday, startMonth, startDay] = startDate.toDateString().split(' ', 3);
          const startHour = startDate.toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true });
          const endDate = new Date(o.endDate);
          const [endWeekday, endMonth, endDay] = endDate.toDateString().split(' ', 4);
          const endHour = endDate.toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true });
          const formattedDate = startDay === endDay
          ? `${startMonth.toUpperCase()} ${startDay.toUpperCase()}, ${startWeekday.toUpperCase()} ${startHour} - ${endHour} PDT`
          : `${startMonth.toUpperCase()} ${startDay.toUpperCase()}, ${startWeekday.toUpperCase()} ${startHour} - ${endMonth.toUpperCase()} ${endDay.toUpperCase()}, ${endWeekday.toUpperCase()} ${endHour} PDT`;
          return(
            <div key={index}>
              {formattedDate}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shifts;
