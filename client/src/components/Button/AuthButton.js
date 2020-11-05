import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useDispatch, useSelector } from 'react-redux';

import { useMutation } from '@apollo/react-hooks';
import useStyles from './AuthButton.styles';
import { clearSession } from '../../services/Session/actions';

import { deleteSession } from '../../utils/mutations';
import { Icon } from '..';

const AuthButton = (props) => {
  const classes = useStyles(props);
  const {
    closeProfilePopover,
    handleToggle,
  } = props;

  const [deleteUserSession] = useMutation(deleteSession);
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);

  return (
    <List className={classes.authBtnUl}>
      <ListItem
        key="auth-button"
        button
        className={classes.listItem}
        onClick={(evt) => {
          evt.preventDefault();
          if (props.authAction === 'Login') {
            handleToggle('login');
          } else if (props.authAction === 'Register') {
            handleToggle('register');
          } else if (props.authAction === 'Logout') {
            dispatch(clearSession());
            deleteUserSession({ variables: { sessionId: session.id } });
          }
          if (closeProfilePopover) {
            closeProfilePopover();
          }
        }}
      >
        <ListItemIcon>
          <Icon name={props.authAction.toLowerCase()} color='secondary' />
        </ListItemIcon>
        <ListItemText primary={props.authAction} className={classes.listItemText} />
      </ListItem>
    </List>
  );
};

AuthButton.propTypes = {
  authAction: PropTypes.string,
  handleToggle: PropTypes.func,
};

export default AuthButton;
