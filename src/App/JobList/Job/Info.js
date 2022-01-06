// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  distance: string,
  hourlyRate: number,
};

const Info = ({
  distance,
  hourlyRate
}: Props): React.Node => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#66CDAA',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 16px 16px 16px',
      alignItems: 'center'
    },
    label: {
      fontSize: '12px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    description: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
    },
    dollarSign: {
      verticalAlign: 'super',
      fontSize: '12px',
      marginRight: '2px',
    }
  });

  return(
    <div className={css(styles.container)}>
        <div>
          <div className={css(styles.label)}>
            {'Distance'}
          </div>
          <div className={css(styles.description)}>
            {`${distance} miles`}
          </div>
        </div>
        <div>
          <div className={css(styles.label)}>
            {'Hourly Rate'}
          </div>
          <div className={css(styles.description)}>
            <span className={css(styles.dollarSign)}>{'$'}</span>{`${hourlyRate}`}
          </div>
        </div>
      </div>
  )
}

export default Info;
