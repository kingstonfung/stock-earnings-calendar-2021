import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './UserInput.module.scss';

/*
This component is responsible for the top-portion of the app. Here we will
utilize Material-UI's input text and their button to help us stylize some of
the user controls.

This component recives a few props: errorMessage, loading, and onTickerSubmit.

onTickerSubmit is a reference to a function declared from the parent, which will
trigger a outbound API call to the server to fetch information.

During this time, the parent will toggle "loading" (the prop) and pass down a new value
to here. As we know it is fetching, we will stop the user from submitting the
input multiple times by showing a spinner icon. We will also block onTickerSubmit from
being called as well if "loading" is true.
*/

const UserInput = (props) => (
  <div className={styles.inputWrapper}>
    <TextField
      id="ticketsInput"
      className={styles.tickerInput}
      label={props.errorMessage || "Enter Ticker Symbols"}
      variant="outlined"
      defaultValue="ATVI, HD, WMT, DELL, BBY, ACDVF"
      error={!!props.errorMessage}
    />
    <Button
      className={[styles.searchButton, props.loading ? styles.loading : null].join(' ')}
      variant="contained"
      color="primary"
      onClick={() => {
        if (!props.loading) props.onTickerSubmit();
      }}
    >
      {
        props.loading
        ? <FontAwesomeIcon icon={faSpinner} size="lg" spin />
        : 'Search'
      }      
    </Button>
  </div>
);

export default UserInput;
