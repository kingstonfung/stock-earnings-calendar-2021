import React from 'react';
import moment from 'moment';

import styles from './EarningsCallDate.module.scss';

const EarningsCallDate = (props) => (
  <div className={styles.wrapper}>
    <span>Earnings call on:</span>
    <span className={styles.earningsCallDate}>
      {moment(props.earningsDate).format('YYYY-MM-DD h:mma')}
    </span>
  </div>
);

export default EarningsCallDate;
