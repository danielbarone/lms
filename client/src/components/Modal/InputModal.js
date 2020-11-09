import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Button,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import useStyles from './InputModal.styles';

// import { setSession } from '../../services/Session/actions';
// import { createSession } from '../../utils/mutations';

const InputModal = (props) => {
  const classes = useStyles(props);
  const [formError, setFormError] = useState();
  const dispatch = useDispatch();
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);

  // const [createUserSession] = useMutation(createSession);
  // const onSubmit = handleSubmit(async ({ email, password }) => {
  //   try {
  //     const {
  //       data: { createUserSession: createdSession },
  //     } = await createUserSession({ variables: { email, password } });
  //     reset();
  //     props.handleClose();
  //     dispatch(setSession(createdSession));
  //   } catch (e) {
  //     setFormError(e.message.split(':')[1]);
  //   }
  // });
  const onSubmit = handleSubmit(async ({ a, b }) => {
    try {
      console.log(a, b);
      reset();
      setOpen(false);
    } catch (e) {
      setFormError(e);
    }
  });

  return open ? (
    <div>
      <Button onClick={handleToggle}>Close</Button>
      <form onSubmit={onSubmit} className={classes.formModalContainer}>
        <Typography className={classes.welcomeMsg} variant='h6'>Welcome Back</Typography>
        <Typography className={classes.formError}>{formError}</Typography>
        <TextField
          className={classes.logInInput}
          id='a'
          variant='outlined'
          label='a'
          name='a'
          type='text'
          inputRef={register}
          disabled={isSubmitting}
        />
        <TextField
          className={classes.passwordInput}
          id='b'
          variant='outlined'
          label='b'
          name='b'
          type='text'
          inputRef={register}
          disabled={isSubmitting}
        />
        <Button
          className={classes.logInButton}
          variant='contained'
          disabled={isSubmitting}
          type='submit'
        >
          Button
        </Button>
        <Divider className={classes.btnDivider} />
      </form>
    </div>
  ) : (
    <Button onClick={handleToggle}>Open</Button>
  );
};

InputModal.propTypes = {
  handleClose: PropTypes.func,
  handleToggle: PropTypes.func,
};

export default InputModal;
