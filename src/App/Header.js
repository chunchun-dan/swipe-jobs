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
    },
    item: {
      marginLeft: '20px',
      marginRight: '20px',
    }
  });

  return(
    <div className={css(styles.header)}>
      <h1 className={css(styles.item)}>
        {'swipejobs'}
      </h1>
      <h1 className={css(styles.item)}>
        {`${firstName} ${lastName}`}
      </h1>
    </div>
  )
}

export default Header;
