// @flow
import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

type Props = {
  imageUrl: string,
  name: string,
  companyName: string
};

const Title = ({
  imageUrl,
  name,
  companyName
}: Props): React.Node => {
  const styles = StyleSheet.create({
    descContainer: {
      margin: '8px 12px 4px 12px',
    },
    description: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    company: {
      fontSize: '16px',
    },
  });

  return(
    <div>
        <img src={imageUrl} alt="job title"/>
        <div className={css(styles.descContainer)}>
          <div className={css(styles.description)}>
            {name}
          </div>
          <div className={css(styles.company)}>
            {companyName}
          </div>
        </div>
      </div>
  )
}

export default Title;
