import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Avatar,
  Divider,
  IconButton,
  Popover,
} from '@material-ui/core';

import useStyles from './AvatarBtn.styles';
import { AuthButton, Icon } from '..';

const AvatarBtn = (props) => {
  const classes = useStyles(props);
  const session = useSelector((state) => state.session);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-avatar-popover' : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} aria-label="Avatar Button" onClick={handleClick}>
        {props.avatarSrc
          ? <Avatar alt="Avatar" src={props.avatarSrc} className={classes.avatar} />
          : <Icon height='1.3em' width='1.3em' name='avatar' />
        }
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={classes.popover}
      >
        <div className={classes.popoverContent}>
          {session ? (
            <AuthButton authAction='Logout' closeProfilePopover={handleClose} />
          ) : (
            <Fragment>
              <AuthButton authAction='Login' handleToggle={props.handleToggle} closeProfilePopover={handleClose} />
              <Divider className={classes.divider} />
              <AuthButton authAction='Register' handleToggle={props.handleToggle} closeProfilePopover={handleClose} />
            </Fragment>
          )}
        </div>
      </Popover>
    </div>
  );
};

AvatarBtn.propTypes = {
  avatarSrc: PropTypes.string,
  page: PropTypes.string,
  handleToggle: PropTypes.func,
};

export default AvatarBtn;
