// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  firstName: string,
  lastName: string,
}

const Header = ({
  firstName,
  lastName
}: Props): React.Node => {
  const styles = StyleSheet.create({
    header: {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    item: {
      marginLeft: '20px',
      marginRight: '20px',
    }
  });

  return(
    <div className={css(styles.header)}>
      <h2 className={css(styles.item)}>
        {'swipejobs'}
      </h2>
      <div className={css(styles.item)}>
        {`${firstName} ${lastName}`}
      </div>
    </div>
  )
}

export default Header;
