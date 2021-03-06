import React, { Component } from 'react';

import UserInput from './components/UserInput';
import Calendar from './containers/Calendar';
import StockEntry from './components/StockEntry';
import stocksTimingFilter from './stocksTimingFilter';
import performStockLookup from './performStockLookup';

/*
This is the root level of our entire application. As you can see the bottom return statement,
we are simply returning (rendering) 2 components.

Each of those components will be responsible for their sub-component's renderings, as well as
passing information down the chain until the data reaches the destinated child component.

We will also pass in references of "onDaySelected" & "onTickerSubmit" to <Calendar> and
<UserInput> respectively. So when the user interacts with the search button or clicking on
the calendar day box, it will trigger these 2 functions which allow the app to react accordingly.
*/

class App extends Component {
  state = {
    displayList: [],
    stocks: [],
    selectedDay: null,
    errorMessage: null,
    lastEnteredValue: '',
    loading: true,
  }

  async componentDidMount() {
    const stocks = await performStockLookup(document.querySelector('#ticketsInput').value);
    this.setState({ stocks, loading: false });
  }

  onDaySelected(day = this.state.selectedDay) {
    if (this.state.stocks && this.state.stocks.length && day) {
      const displayList = stocksTimingFilter(this.state.stocks, day.selected, 'day');
      this.setState({ displayList, selectedDay: day });
    }
  }

  async onTickerSubmit() {
    this.setState({ loading: true });
    const userEnteredValue = document.querySelector('#ticketsInput').value;
    if (userEnteredValue === this.state.lastEnteredValue) return;

    const stocks = await performStockLookup(userEnteredValue);
    if (stocks.error) {
      this.setState({ errorMessage: stocks.message, loading: false })
      return;
    }
    
    this.setState({
      stocks, error: false,
      errorMessage: null,
      lastEnteredValue: userEnteredValue,
      loading: false,
    });
    this.onDaySelected();
  }

  render() {
    return (
      <>
        <UserInput
          loading={this.state.loading}
          onTickerSubmit={this.onTickerSubmit.bind(this)}
          errorMessage={this.state.errorMessage}
        />
        <Calendar
          stocks={this.state.stocks}
          daySelectionMade={this.onDaySelected.bind(this)}
        />
        {this.state.displayList &&
          this.state.displayList.map(visibleStocks => <StockEntry key={visibleStocks.symbol} {...visibleStocks} />)
        }
      </>
    );
  }
}

export default App;
