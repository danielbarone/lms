import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Button,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import { setSession } from '../../services/Session/actions';
import useStyles from './LogIn.styles';
import { createSession } from '../../utils/mutations';

const LogIn = (props) => {
  const classes = useStyles(props);

  const { onChangeToSignUp: pushChangeToSignUp } = props;

  const [authError, setAuthError] = useState();

  const dispatch = useDispatch();
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm();
  const [createUserSession] = useMutation(createSession);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const {
        data: { createUserSession: createdSession },
      } = await createUserSession({ variables: { email, password } });
      reset();
      props.handleClose();
      dispatch(setSession(createdSession));
    } catch (e) {
      setAuthError(e.message.split(':')[1]);
    }
  });

  return (
      <form onSubmit={onSubmit} className={classes.formModalContainer}>
        <Typography className={classes.welcomeMsg} variant='h6'>Welcome Back</Typography>
        <Typography className={classes.authError}>{authError}</Typography>
        <TextField
          className={classes.logInInput}
          id="email"
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          inputRef={register}
          disabled={isSubmitting}
        />
        <TextField
          className={classes.passwordInput}
          id="password"
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          inputRef={register}
          disabled={isSubmitting}
        />
        <Button
          className={classes.logInButton}
          variant="contained"
          disabled={isSubmitting}
          type="submit"
        >
          Log in
        </Button>
        <Divider className={classes.btnDivider} />
        <Button
          className={classes.signUpButton}
          onClick={(evt) => {
            evt.preventDefault();
            props.handleClose();
            props.handleToggle('register');
            pushChangeToSignUp();
          }}
        >
          Register
        </Button>
      </form>
  );
};

LogIn.propTypes = {
  handleClose: PropTypes.func,
  handleToggle: PropTypes.func,
  onChangeToSignUp: PropTypes.func,
};

export default LogIn;
