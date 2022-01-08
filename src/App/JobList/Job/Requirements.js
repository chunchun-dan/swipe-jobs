// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  requirements: Array<string>,
};

const Requirements = ({requirements}: Props): React.Node => {
  const styles = StyleSheet.create({
    container: {
      margin: '16px 0 16px 0',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      fontSize: '20px',
      margin: '0 24px 0 24px',
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '8px',
    }
  })
  return(
    <div className={css(styles.container)}>
      <div className={css(styles.icon)}>
        <i className="fas fa-tools"></i>
      </div>
      <div>
        <div className={css(styles.label)}>
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
