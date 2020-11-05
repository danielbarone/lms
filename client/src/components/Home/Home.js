import React from 'react';

import useStyles from './Home.styles';

const Home = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      Home...
    </div>
  );
};

export default Home;
