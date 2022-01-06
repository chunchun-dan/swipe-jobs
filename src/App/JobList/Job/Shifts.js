// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

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
  const styles = StyleSheet.create({
    container: {
      margin: '16px 0 16px 0',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      fontSize: '20px',
      margin: '0 24px 0 24px'
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    shifts: {
      display: 'grid',
      gridAutoFlow: ' row',
      gridRowGap: '8px',
    }
  });

  return(
    <div className={css(styles.container)}>
      <div className={css(styles.icon)}>
        <i className="fas fa-calendar-alt"></i>
      </div>
      <div>
        <div className={css(styles.label)}>
          {'Shift Dates'}
        </div>
        <div className={css(styles.shifts)}>
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
    </div>
  )
}

export default Shifts;
