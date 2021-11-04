import React from 'react';
import TickerSymbol from '../TickerSymbol/TickerSymbol';

import styles from './Day.module.scss';

/*
This component will be the "square" on the calendar showing the date number.
It receives a few props: day, select, selected, stocks.

"day" would be the date that the square is responsible for.
For example "20" (for 20th of the selected month).

It will also receive a list of stocks that has earning calls on that day, if any.
And then it will pass the list of stocks to <TickerSymbol>, allowing that component
to be responsible for rendering the ticker symbols.

"selected" is the prop to indicate if the user has this date selected.

"select" is the reference of the function, passed from the parent (<Week>), so that when
the day (square box) is clicked, we can trigger the intended function to handle
the click event.

"generateClassName" is a utility function that can help us decide the condition of
the selected date, and if today matches to the box's day. Then, we will render the
styles accordingly. Once the function completes, the value will be returned back to
className, which will append all the approperate styles to this "box".
*/

const Day = (props) => {
  const { day, select, selected, stocks } = props;

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
      {stocks && stocks.length ? <TickerSymbol stocks={stocks}></TickerSymbol> : null}
      {day.number}
    </span>
  );
}

export default Day;
