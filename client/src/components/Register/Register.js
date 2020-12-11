import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import {
  Button,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';

import useStyles from './Register.styles';
import { createUserMutation } from '../../utils/mutations';

const Register = (props) => {
  const classes = useStyles(props);
  const { onChangeToLogin: pushChangeToLogin, contactId: cId } = props;

  const [authError, setAuthError] = useState();

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const [createUser] = useMutation(createUserMutation);

  const onSubmit = handleSubmit(async ({
    contactId, firstName, lastName, email, password,
  }) => {
    try {
      await createUser({
        variables: {
          contactId, firstName, lastName, email, password,
        },
      });
      reset();
      props.handleClose();
      pushChangeToLogin();
    } catch (e) {
      setAuthError(e.message.split(':')[1]);
    }
  });

  return (
    <form onSubmit={onSubmit} className={classes.formModalContainer}>
      <Typography className={classes.welcomeMsg} variant='h6'>Welcome to Temp</Typography>
      <Typography className={classes.authError}>{authError}</Typography>
      <TextField
        className={cId ? classes.hiddenInput : classes.logInInput}
        id='contactId'
        variant='outlined'
        label='Registration Key'
        name='contactId'
        inputRef={register}
        defaultValue={cId || ''}
      />
      <TextField
        className={cId ? classes.logInInput : classes.passwordInput}
        id='firstName'
        variant='outlined'
        label='First Name'
        name='firstName'
        inputRef={register}
        disabled={isSubmitting}
      />
      <TextField
        className={classes.passwordInput}
        id='lastName'
        variant='outlined'
        label='Last Name'
        name='lastName'
        inputRef={register}
        disabled={isSubmitting}
      />
      <TextField
        className={classes.passwordInput}
        id='email'
        variant='outlined'
        label='Email'
        name='email'
        type='email'
        inputRef={register}
        disabled={isSubmitting}
      />
      <TextField
        className={classes.passwordInput}
        id='password'
        variant='outlined'
        label='Password'
        name='password'
        type='password'
        inputRef={register}
        disabled={isSubmitting}
      />
      <TextField
        className={classes.passwordInput}
        id='confirmPassword'
        variant='outlined'
        label='Confirm Password'
        name='confirmPassword'
        type='password'
        inputRef={register}
      />
      <Button
        className={classes.logInButton}
        variant='contained'
        color='primary'
        disabled={isSubmitting}
        type='submit'
      >
        Register
      </Button>
      <Divider className={classes.btnDivider} />
      <Button
        className={classes.signUpButton}
        onClick={(evt) => {
          evt.preventDefault();
          props.handleClose();
          props.handleToggle('login');
          pushChangeToLogin();
        }}
      >
        Login
      </Button>
    </form>
  );
};

Register.propTypes = {
  contactId: PropTypes.string,
  handleClose: PropTypes.func,
  handleToggle: PropTypes.func,
  onChangeToLogin: PropTypes.func,
};

export default Register;
