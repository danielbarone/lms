import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider } from '@material-ui/core';
import useStyles from './TabbedMenu.styles';

const View = (props) => (
  <div
    hidden={props.index !== props.view}
    className={props.className}
  >
    {props.view === props.index && (
      <div>
        {props.children}
      </div>
    )}
  </div>
);

View.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  index: PropTypes.any.isRequired,
  view: PropTypes.any.isRequired,
};

const TabbedMenu = (props) => {
  const classes = useStyles(props);
  const { data } = props;

  const [view, setView] = useState(0);

  const handleClick = (evt, index) => {
    evt.preventDefault();
    if (index === view) {
      setView(0);
      return;
    }
    setView(index);
  };

  const navBtns = (
    <div className={classes.tabsContainer}>
      {data.map((obj) => (
        obj.id !== 0 ? (
          <Button
            className={view !== obj.id ? classes.viewBtnInactive : classes.viewBtn}
            onClick={(evt) => handleClick(evt, obj.id)}
            key={`view-btn--${obj.id}`}
          >
            {obj.name}
          </Button>
        ) : ('')
      ))}
    </div>
  );

  const content = (
    <div className={classes.viewContainer}>
      <View
        index={0}
        view={view}
        className={classes.viewRoot}
      >
        Home...
      </View>
      {data.map((obj) => (
        <View
          index={obj.id}
          key={`view-content--${obj.id}`}
          view={view}
          className={classes.viewRoot}
        >
          {obj.content}
        </View>
      ))}
    </div>
  );

  return (
    <div>
      {navBtns}
      <Divider className={classes.divider} />
      {content}
    </div>
  );
};

TabbedMenu.propTypes = {
  classes: PropTypes.any,
  data: PropTypes.array,
  view: PropTypes.number,
};

export default TabbedMenu;
