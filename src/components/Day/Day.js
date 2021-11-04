import React from 'react';
import TickerSymbol from '../TickerSymbol/TickerSymbol';

import styles from './Day.module.scss';

const Day = (props) => {
  const { day, select, selected } = props;

  const generateClassName = () => {
    const list = [styles.day];

    if (day.date.isSame(selected)) list.push(styles.selected);

    if (day.isToday) list.push(styles.today);
    
    if (!day.isCurrentMonth) list.push(styles.differentMonth);

    return list.join(' ');
  }

  return (
    <span 
      key={day.date.toString()} 
      className={generateClassName()}
      onClick={() => select(day)}
    >
      {props.stocks && props.stocks.length ? <TickerSymbol stocks={props.stocks}></TickerSymbol> : null}
      {day.number}
    </span>
  );
}

export default Day;
