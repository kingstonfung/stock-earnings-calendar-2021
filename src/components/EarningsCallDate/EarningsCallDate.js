import React from 'react';
import moment from 'moment';

import styles from './EarningsCallDate.module.scss';

/*
This component will receive a prop called "earningsDate", which is a JS Date object.
Here we use moment() to help us format the date to a more user-friendly string.
*/

const EarningsCallDate = (props) => (
  <div className={styles.wrapper}>
    <span>Earnings call on:</span>
    <span className={styles.earningsCallDate}>
      {moment(props.earningsDate).format('YYYY-MM-DD h:mma')}
    </span>
  </div>
);

export default EarningsCallDate;
