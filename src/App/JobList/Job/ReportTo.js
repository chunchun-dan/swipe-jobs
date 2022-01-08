// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  name: string,
  phone: string,
};

const ReportTo = ({
  name,
  phone,
}: Props): React.Node => {
  const formattedPhoneNumber = phone?.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2 $3");
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      margin: '16px 0 16px 0',
      alignItems: 'center',
    },
    icon: {
      fontSize: '24px',
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
        <i className="fas fa-user-circle"></i>
      </div>
      <div>
        <div className={css(styles.label)}>
          {'Report To'}
        </div>
        <div>
          {`${name} ${formattedPhoneNumber ?? ''}`}
        </div>
      </div>
    </div>
  );
}

export default ReportTo;
