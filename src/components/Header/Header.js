import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import moment from 'moment';

/*
This component is responsible for the calendar header UI.

It is written as a class-type React component as an example, as we want to
demostrate an internal state management setup. The state here we want
to "hold on to" is simply the current viewing month (this.state.month).

We will also utilize "moment" to help us format a friendlier name when displaying
the text for the viewing month.

We receive the prop "triggerMonthChange", which is a reference to the function
pass down here from the parent. It will trigger the calendar to either
move forward or backward and display the next or previous month.
*/

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: moment() }
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      month: nextProps.month,
    }
  }

  previous() {
    const { month } = this.state;

    window.month = month;
    this.setState({
      month: month.subtract(1, 'month'),
    });

    this.props.triggerMonthChange(month);
  }

  next() {
    const { month } = this.state;

    this.setState({
      month: month.add(1, 'month'),
    });

    this.props.triggerMonthChange(month);
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.monthDisplay}>
          <div className={styles.arrowWrapper} onClick={this.previous}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleLeft} size="lg" />
          </div>
          <span className={styles.monthLabel}>{this.state.month.format("MMMM YYYY")}</span>
          <div className={styles.arrowWrapper} onClick={this.next}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleLeft} size="lg" rotation={180} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <span className={styles.day}>Sun</span>
          <span className={styles.day}>Mon</span>
          <span className={styles.day}>Tue</span>
          <span className={styles.day}>Wed</span>
          <span className={styles.day}>Thu</span>
          <span className={styles.day}>Fri</span>
          <span className={styles.day}>Sat</span>
        </div>
      </header>
    )
  }
}

export default Header;
