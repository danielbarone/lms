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
  Radio,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

import {
  authorActions,
  genreActions,
  publisherActions,
} from '../../services/actions';

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
    info,
    modal,
    refresh,
    requireId,
    setOpen,
    title,
    titleText,
  } = props;
  const dispatch = useDispatch();

  const [formError, setFormError] = useState();

  // Book Title
  const [bookTitle, setBookTitle] = useState('');
  const handleTextFieldChange = (event) => {
    setBookTitle(event.target.value);
  };

  // Book ID
  const [bookId, setBookId] = useState('');
  const handleTextFieldChangeId = (event) => {
    setBookId(event.target.value);
  };

  // Authors
  const authors = useSelector((state) => state.authors.authors);
  const getAuthors = () => dispatch(authorActions.getAuthors());
  const [author, setAuthor] = useState([]);
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  // Genres
  const genres = useSelector((state) => state.genres.genres);
  const getGenres = () => dispatch(genreActions.getGenres());
  const [genre, setGenre] = useState([]);
  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
  };

  // Publishers
  const publishers = useSelector((state) => state.publishers.publishers);
  const getPublishers = () => dispatch(publisherActions.getPublishers());
  const [publisher, setPublisher] = useState();
  const handleChangePublisher = (event) => {
    setPublisher(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookData = {
        title: bookTitle,
        publisher: {
          publisherId: publisher ? publisher.id : '',
        },
        authors: author.map((a) => ({
          authorId: a.id,
        })),
        genres: genre.map((g) => ({
          genreId: g.id,
        })),
      };
      if (requireId) {
        bookData.bookId = bookId;
      }
      const response = await dispatch(action(bookData));
      if (!response.data) {
        throw new Error(response.error);
      }
      setOpen(false);
      refresh();
    } catch (error) {
      setFormError(error.message.split(':')[1]);
    }
  };

  useEffect(() => {
    getAuthors();
    getGenres();
    getPublishers();
    if (info) {
      setBookId(info.id);
    }
  }, []);

  return (
      <form onSubmit={(e) => handleSubmit(e)} className={classes.formModalContainer}>
        <Typography className={classes.welcomeMsg} variant='h6'>{titleText}</Typography>
        <Typography className={classes.formError}>{formError}</Typography>
        {requireId ? (
          <TextField
            className={classes.modalInput}
            id='book-id'
            variant='outlined'
            label='Book ID'
            name='book-id'
            defaultValue={info ? info.id : ''}
            type='text'
            onChange={handleTextFieldChangeId}
          />
        ) : ''}
        <TextField
          className={classes.modalInput}
          id='new-book-title'
          variant='outlined'
          label='Title'
          name='title'
          defaultValue={info ? info.name : ''}
          type='text'
          onChange={handleTextFieldChange}
        />
        {modal === 'delete' ? '' : (
        <>
        <FormControl className={classes.formControl}>
          <InputLabel id='publisher-checkbox-label'>Publisher</InputLabel>
          <Select
            labelId='publisher-checkbox-label'
            id='publisher-checkbox'
            value={publisher}
            onChange={handleChangePublisher}
            input={<Input />}
            renderValue={(selected) => selected.name}
            MenuProps={MenuProps}
          >
            {publishers ? publishers.map((p) => (
              <MenuItem key={`${p.name}-${p.id}`} value={p}>
                <Radio checked={publisher === p} />
                <ListItemText primary={p.name} />
              </MenuItem>
            )) : []}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id='author-multiple-checkbox-label'>Author</InputLabel>
          <Select
            labelId='author-multiple-checkbox-label'
            id='author-multiple-checkbox'
            multiple
            value={author}
            onChange={handleChangeAuthor}
            input={<Input />}
            renderValue={(selected) => {
              const authorNames = selected.map((s) => s.name);
              return authorNames.join(', ');
            }}
            MenuProps={MenuProps}
          >
            {authors ? authors.map((a) => (
              <MenuItem key={`${a.name}-${a.id}`} value={a}>
                <Checkbox checked={author.indexOf(a) > -1} />
                <ListItemText primary={a.name} />
              </MenuItem>
            )) : []}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-checkbox-label">Genre</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={genre}
            onChange={handleChangeGenre}
            input={<Input />}
            renderValue={(selected) => {
              const genreNames = selected.map((s) => s.name);
              return genreNames.join(', ');
            }}
            MenuProps={MenuProps}
          >
            {genres ? genres.map((g) => (
              <MenuItem key={`${g.name}-${g.id}`} value={g}>
                <Checkbox checked={genre.indexOf(g) > -1} />
                <ListItemText primary={g.name} />
              </MenuItem>
            )) : []}
          </Select>
        </FormControl>
        </>
        )}
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
  classes: PropTypes.any,
  details: PropTypes.string,
  info: PropTypes.object,
  modal: PropTypes.string,
  refresh: PropTypes.func,
  requireId: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  titleText: PropTypes.string,
};
