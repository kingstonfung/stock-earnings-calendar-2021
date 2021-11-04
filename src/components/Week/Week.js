import React from 'react';

import Day from '../Day';
import stocksTimingFilter from '../../stocksTimingFilter';

import styles from './Week.module.scss';

/*
This component is responsible for rendering 7 boxes in a row. It will receive
props to know what is the beginning "date" of the week, and then we will simply
loop the "Day" creation 7 times to create a week.

"select" is a special prop, which is a reference to the function passed down from
the parent <Calendar>. And then it will be relayed again down to Day eventually.
By daisy-chanining down the props, we can let <Day> to trigger a function that was
declared "from above", and allow the app to react accordingly.
*/

const generateDays = (date, month) => {
  let days = [];
  for (let i = 0; i < 7; i++) {
    let day = {
      date,
      name: date.format('dd').substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), 'day'),
      uniqueKey: date.format(),
    };

    days.push(day);
    date = date.clone();
    date.add(1, 'day');
  }

  return days;
};

const Week = (props) => {
  const { date, month, selected, select, stocks } = props;
  const days = generateDays(date, month);

  return (
    <div className={styles.week}>
      {
        days.map((day) => {
          let earningCallsForTheDay;
          if (stocks.length) {
            earningCallsForTheDay = stocksTimingFilter(stocks, day.date, 'day');
          }

          return <Day key={day.uniqueKey} day={day} selected={selected} select={select} stocks={earningCallsForTheDay} />;
        })
      }
    </div>
  );
}

export default Week;
