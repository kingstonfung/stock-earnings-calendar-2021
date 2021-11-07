/* eslint-disable */
<App> { /* App.js */ }

  <UserInput> { /* src/components/UserInput/UserInput.js */ }
    <TextField>Material UI Input</TextField>
    <Button>Material UI Search Button</Button>
  </UserInput>

  <Calendar> { /* src/containers/Calendar/Calendar.js */ }
    <Header> { /* src/components/Header/Header.js */ }
      <Button>Left Button</Button>
      <Text>Month</Text>
      <Button>Right Button</Button>
    </Header>
    <Week> { /* src/components/Week/Week.js */ }
      <Day> { /* src/components/Day/Day.js */ }
        <span>
          <TickerSymbol><span>Stock Ticker Symbol</span></TickerSymbol> { /* src/components/TickerSymbol/TickerSymbol.js */ }
          <Text>Day Number</Text>
        </span>
      </Day>
      {/* <Day> repeats 6 more times to represent a week */}
    </Week>
    {/* <Week> repeats few more times */}
  </Calendar>

  <StockEntry> { /* src/components/StockEntry/StockEntry.js */ }
    <div>For ticker symbol</div>
    <div>For company name</div>
    <div>For dollar value</div>
    <EarningsCallDate> { /* src/components/EarningsCallDate/EarningsCallDate.js */ }
      <span>Static Text</span>
      <span>For earnings call date</span>
    </EarningsCallDate>
  </StockEntry>
  {/* <StockEntry> may repeat if multiple companies are having events on that day */}
</App>