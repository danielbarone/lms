import React from 'react';

import useStyles from './Home.styles';

const Home = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <h2>Welcome to the Library Management System!</h2>
    </div>
  );
};

export default Home;
