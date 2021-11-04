import React from 'react';

import styles from './TickerSymbol.module.scss';

/*
This component will render the small ticker symbol on the calendar box.
It will loop through the list of stocks (stocks.map()) and generate a list
of <span> text.
*/

const TickerSymbol = (props) => {
  const { stocks } = props;

  return (
    <div className={styles.symbolsWrapper}>
      { stocks.map(stock => <span key={stock.symbol} className={styles.symbol}>{stock.symbol}</span>) }
    </div>
  );
};

export default TickerSymbol;
