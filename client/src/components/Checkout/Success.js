import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './Checkout.styles';

const Success = () => {
  const classes = useStyles();
  const [session, setSession] = useState({});
  const location = useLocation();
  const sessionId = location.search.replace('?session_id=', '');
  const [receipt_url, setUrl] = useState('#')

  const updating = useSelector(state => state.invoiceReducer.updating)

  useEffect(() => {

    async function fetchSession() {
      setSession(
        await fetch('/checkout-session?sessionId=' + sessionId).then((res) => {
          return res.json()
        }).then((res) => {
          setUrl(res.metadata.receipt_url)
          return res
        })
      );
    }
    fetchSession();
  }, [sessionId]);

  return (
    <div>
      {updating ? 
        (<div className={classes.spinnerContainer}>
          <CircularProgress className={classes.progressSpinner} />
        </div>) :
        <div>
          <h2>Your payment was successful!</h2>
          <div>
            <a className={classes.successReceipt} href={receipt_url}>
              <h1>View your receipt</h1>
            </a>
          </div>
        </div>
      }
      
    </div>
  );
};

export default Success;
