/* React */
import React from 'react';
/* Styles */
import { useStyles } from './Preview.styles';

const Preview = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      Preview.js
    </div>
  );
};

export default Preview;
