/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Genre.styles';
/* Components */
import { EntityTable, InputModal } from '..';
import { genreActions } from '../../services/actions';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Genre', width: 250 },
];

const formColumns = [
  { field: 'genreName', label: 'Genre', type: 'text' },
];

// const formColumnsUpdate = [
//   { field: 'genreId', label: 'Genre ID', type: 'text' },
//   { field: 'genreName', label: 'Genre', type: 'text' },
// ];

const Genre = (props) => {
  const classes = useStyles(props);
  const genres = useSelector((state) => state.genres.genres);
  const loading = useSelector((state) => state.genres.loading);
  const dispatch = useDispatch();

  const createGenre = (genre) => genreActions.addGenre(genre);
  // const updateGenre = (genre) => genreActions.updateGenre(genre);
  const getGenres = () => dispatch(genreActions.getGenres());

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className={classes.root}>
      <InputModal
        action={createGenre}
        columns={formColumns}
        details='Enter details for the new genre you would like to add.'
        title='New Genre'
        refresh={getGenres}
      />
      {/* <InputModal
        action={updateGenre}
        columns={formColumnsUpdate}
        details='Edit details for the genre you would like to update.'
        title='Update Genre'
        refresh={getGenres}
      /> */}
      <EntityTable
        rows={genres}
        cols={columns}
        loading={loading}
      />
    </div>
  );
};

export default Genre;
