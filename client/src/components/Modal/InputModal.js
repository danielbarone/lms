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

const InputModal = (props) => {
  const classes = useStyles(props);
  const {
    action,
    columns,
    CustomForm,
    details,
    info,
    modal,
    refresh,
    requireId,
    title,
    titleText,
  } = props;
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

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const response = await dispatch(action(formData));
      if (!response.data) {
        throw new Error(response.error);
      }
      reset();
      setOpen(false);
      refresh();
    } catch (e) {
      setFormError(e.message.split(':')[1]);
    }
  });

  return (
    <div>
      <Button onClick={handleToggle} className={classes.toggleModal}>{title}</Button>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby='input-modal'
        aria-describedby='input-modal'
      >
        {CustomForm ? (
          <CustomForm
            action={action}
            classes={classes}
            details={details}
            info={info}
            modal={modal}
            refresh={refresh}
            setOpen={setOpen}
            title={title}
            titleText={titleText}
            requireId={requireId}
          />
        ) : (
          <form onSubmit={onSubmit} className={classes.formModalContainer}>
            <Typography className={classes.welcomeMsg} variant='h6'>{titleText}</Typography>
            <Typography className={classes.formError}>{formError}</Typography>
            {columns.map((c) => (
                <TextField
                  className={classes.modalInput}
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
              className={classes.modalSubmitBtn}
              variant='contained'
              disabled={isSubmitting}
              type='submit'
            >
              Submit
            </Button>
            <Divider className={classes.btnDivider} />
            <Typography className={classes.details}>{details}</Typography>
          </form>
        )}
      </Dialog>
    </div>
  );
};

InputModal.propTypes = {
  action: PropTypes.func,
  columns: PropTypes.array,
  details: PropTypes.string,
  info: PropTypes.object,
  modal: PropTypes.string,
  refresh: PropTypes.func,
  requireId: PropTypes.bool,
  title: PropTypes.string,
  titleText: PropTypes.string,
  CustomForm: PropTypes.any,
};

export default InputModal;
