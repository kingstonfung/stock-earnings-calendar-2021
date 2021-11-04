import React from 'react';
import moment from 'moment';

import Header from "../../components/Header";
import Week from '../../components/Week';
import stocksTimingFilter from '../../stocksTimingFilter';

import generateWeeks from './generateWeeks';

import styles from './Calendar.module.scss';

/*
This is one of the higher positioned "container", which houses many
child components.

It receives 2 props from the parent ("App", which is the root container):
"daySelectionMade" and "stocks"

We will call "daySelectionMade" as soon as the user clicks on a day. The
reference of this function is called inside "changeMonth". The reference to
changeMonth is passed down to the children, so the lowest sitting component
would be able to call it directly as the user clicks on the <Day> (square box).

"generateWeeks" is an utility function that help us create a list of weeks based
on the selected month we passed in. Having the "weeks" data generated, we can
simply pass each "week" into the <Week> component for rendering. We wil also
pass in the function "changeMonth", so this reference can be kept as part of the
week's data.

If the user clicks on a week that is the next (or previous) month, we want to
jump the calendar to the corrsponding month. Similar to how other calendar apps
behaves.
*/

class Calendar extends React.Component {
  state = {
    month: moment(),
    selected: moment().startOf('day'),
  };

  changeMonth(selectedDate) {
    this.setState({ ...selectedDate });
    this.props.daySelectionMade(selectedDate);
  }

  render() {
    const weeks = generateWeeks(this.state.month, this.state.selected, this.changeMonth.bind(this));
    const onMonthChangeTriggered = month => this.setState({ month });

    return (
      <section className={styles.calendar}>
        <Header month={this.state.month} triggerMonthChange={onMonthChangeTriggered} />
        { weeks.map((weekInfo) => {
          if (this.props.stocks.length) {
            weekInfo.stocks = stocksTimingFilter(this.props.stocks, weekInfo.date, 'week')
          }
          return <Week {...weekInfo} key={weekInfo.date} />;
        }) }
      </section>
    );
  }
}

export default Calendar;
