// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  address: string,
  distance: string,
};

const Location = ({
  address,
  distance,
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
    extraInfo: {
      fontSize: '14px',
      color: 'grey',
      marginTop: '8px'
    }
  });

  return(
    <div className={css(styles.container)}>
      <div className={css(styles.icon)}>
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div>
        <div className={css(styles.label)}>
          {'Location'}
        </div>
        <div>
          {address}
        </div>
        <div className={css(styles.extraInfo)}>
          {`${distance} miles from your job search location`}
        </div>
      </div>
      <div className={css(styles.icon)}>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}

export default Location;
