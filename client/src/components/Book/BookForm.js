import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

import { genreActions } from '../../services/actions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function BookForm(props) {
  const {
    action,
    classes,
    details,
    title,
  } = props;
  const dispatch = useDispatch();
  const [formError, setFormError] = useState();

  const genres = useSelector((state) => state.genres.genres);
  const getGenres = () => dispatch(genreActions.getGenres());
  const [genre, setGenre] = useState([]);

  const [bookTitle, setBookTitle] = useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleTextFieldChange = (event) => {
    setBookTitle(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookData = {
        title: bookTitle,
        genres: genre.map((g) => ({
          genreId: g.id,
        })),
      };
      const response = await dispatch(action(bookData));
      if (!response.data) {
        throw new Error(response.error);
      }
    } catch (error) {
      setFormError(error.message.split(':')[1]);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
      <form onSubmit={(e) => handleSubmit(e)} className={classes.formModalContainer}>
        <Typography className={classes.welcomeMsg} variant='h6'>{title}</Typography>
        <Typography className={classes.formError}>{formError}</Typography>
        <TextField
          className={classes.modalInput}
          id='new-book-title'
          variant='outlined'
          label='Title'
          name='title'
          type='text'
          onChange={handleTextFieldChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Genre</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={genre}
            onChange={handleChange}
            input={<Input />}
            renderValue={(selected) => {
              const genreNames = selected.map((s) => s.name);
              return genreNames.join(', ');
            }}
            MenuProps={MenuProps}
          >
            {genres ? genres.map((g) => (
              <MenuItem key={g.name} value={g}>
                <Checkbox checked={genre.indexOf(g) > -1} />
                <ListItemText primary={g.name} />
              </MenuItem>
            )) : []}
          </Select>
        </FormControl>
        <Button
            className={classes.modalSubmitBtn}
            variant='contained'
            type='submit'
          >
            Submit
          </Button>
          <Divider className={classes.btnDivider} />
          <Typography className={classes.details}>{details}</Typography>
      </form>
  );
}

BookForm.propTypes = {
  action: PropTypes.func,
  details: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.any,
};
