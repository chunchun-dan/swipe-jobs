// @flow
import * as React from 'react';

type Props = {
  firstName: string,
  lastName: string,
}

const Header = ({
  firstName,
  lastName
}: Props): React.Node => {
  const styles = {
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
  }
  return(
    <div style={styles.header}>
      <h1 style={styles.item}>
        {'swipejobs'}
      </h1>
      <h1 style={styles.item}>
        {`${firstName} ${lastName}`}
      </h1>
    </div>
  )
}

export default Header;
