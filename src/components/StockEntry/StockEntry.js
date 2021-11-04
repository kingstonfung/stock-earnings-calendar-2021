import React from 'react';

import formatCurrency from '../../formatCurrency';

import EarningsCallDate from '../EarningsCallDate/EarningsCallDate';

import styles from './StockEntry.module.scss';

const StockEntry = (props) => (
  <div className={styles.stockEntry}>
    <span className={styles.symbol}>{props.symbol}</span>

    <span className={styles.name}>{props.name}</span>

    <span className={styles.price}>${formatCurrency(props.price)}</span>

    <EarningsCallDate earningsDate={props.earningsDate} />
  </div>
);

export default StockEntry;
