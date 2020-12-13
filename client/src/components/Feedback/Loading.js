import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import useStyles from './Loading.styles';

const Loading = (props) => {
  const classes = useStyles();
  const { duration, timeoutMsg } = props;
  const [timedOut, setTimedOut] = useState(false);

  const sessionTimeout = () => {
    const timer = setTimeout(() => {
      setTimedOut(true);
    }, duration);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    sessionTimeout();
  });

  return timedOut ? (
    <h1>{timeoutMsg}</h1>
  ) : (
    <div className={classes.spinnerContainer}>
      <CircularProgress className={classes.spinner}/>
    </div>
  );
};

Loading.propTypes = {
  duration: PropTypes.number,
  timeoutMsg: PropTypes.string,
};

export default Loading;
