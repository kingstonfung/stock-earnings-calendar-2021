import React from 'react';

import formatCurrency from '../../formatCurrency';

import EarningsCallDate from '../EarningsCallDate/EarningsCallDate';

import styles from './StockEntry.module.scss';

/*
This component will receive a few props: symbol, name, price, and earningDate.
Those information will be dispalyed as stylized text.

In addition, we will render another component <EarningsCallDate> which we will
relay "earningDate" down another level.
*/

const StockEntry = (props) => (
  <div className={styles.stockEntry}>
    <span className={styles.symbol}>{props.symbol}</span>

    <span className={styles.name}>{props.name}</span>

    <span className={styles.price}>${formatCurrency(props.price)}</span>

    <EarningsCallDate earningsDate={props.earningsDate} />
  </div>
);

export default StockEntry;
