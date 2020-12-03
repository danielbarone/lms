/* React */
import React from 'react';
/* Styles */
import { useStyles } from './Preview.styles';

const Preview = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <h3 className={classes.noAccess}>
        You do not have the correct permissions to view this page. Contact an administrator for more info.
      </h3>
    </div>
  );
};

export default Preview;
