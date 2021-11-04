import React from 'react';

import styles from './TickerSymbol.module.scss';

const TickerSymbol = (props) => {
  const { stocks } = props;

  return (
    <div className={styles.symbolsWrapper}>
      { stocks.map(stock => <span key={stock.symbol} className={styles.symbol}>{stock.symbol}</span>) }
    </div>
  );
};

export default TickerSymbol;
