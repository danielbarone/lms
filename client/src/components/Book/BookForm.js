/* React */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useStyles from './BookForm.styles';
import { genreActions } from '../../services/actions';
import Autocomplete from '@material-ui/lab/Autocomplete';

const BookForm = (props) => {
  const classes = useStyles(props);
  const genres = useSelector((state) => state.genres.genres);
  const dispatch = useDispatch();
  const getGenres = () => dispatch(genreActions.getGenres());

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <>
      <TextField
        className={classes.modalInput}
        id='title'
        variant='outlined'
        label='Title'
        name='title'
        type='text'
        inputRef={props.inputRef}
        disabled={props.disabled}
      />
      <Autocomplete
        multiple
        options={genres ? genres : []}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => {
          console.log(params);
          return (
          <TextField
            className={classes.modalInput}
            id='book-genre-1'
            variant='outlined'
            {...params}
            label='Genre'
            name='genre'
            disabled={props.disabled}
            inputRef={props.inputRef}
          />
        )}}
      />
      {/* <InputLabel>Genres</InputLabel>
      <Select
        value={selectedGenre}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {genres ? genres.map((g, i) => (
          <MenuItem
            value={g}
            key={g.id}
          >
            {g.name}
          </MenuItem>
        )) : <MenuItem value=""><em>None</em></MenuItem>
        }
      </Select> */}
    </>
  );
};

export default BookForm;
