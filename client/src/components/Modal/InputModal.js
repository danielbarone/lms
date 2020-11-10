import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import useStyles from './InputModal.styles';

// import { setSession } from '../../services/Session/actions';
// import { createSession } from '../../utils/mutations';
import { branchActions } from '../../services/actions';

const InputModal = (props) => {
  const classes = useStyles(props);
  const { columns } = props;
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
  const handleClose = () => setOpen(false);

  const onSubmit = handleSubmit(async (branch) => {
    try {
      dispatch(branchActions.addBranch(branch));
      reset();
      setOpen(false);
    } catch (e) {
      setFormError(e);
    }
  });

  return (
    <div>
      <Button onClick={handleToggle}>{open ? 'close' : 'open'}</Button>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby='input-modal'
        aria-describedby='input-modal'
      >
        <Button onClick={handleToggle}>Close</Button>
        <form onSubmit={onSubmit} className={classes.formModalContainer}>
          <Typography className={classes.welcomeMsg} variant='h6'>Welcome Back</Typography>
          <Typography className={classes.formError}>{formError}</Typography>
          {columns.map((c) => (
            <TextField
              className={classes.logInInput}
              key={c.field}
              id={c.field}
              variant='outlined'
              label={c.label}
              name={c.field}
              type={c.type}
              inputRef={register}
              disabled={isSubmitting}
            />
          ))}
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
      </Dialog>
    </div>
  );
};

InputModal.propTypes = {
  columns: PropTypes.array,
};

export default InputModal;
