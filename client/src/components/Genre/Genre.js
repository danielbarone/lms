/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Genre.styles';
/* Components */
import { EntityTable, Icon, InputModal } from '..';
import { genreActions } from '../../services/actions';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Genre', width: 250 },
];

const formColumns = [
  { field: 'genreName', label: 'Genre', type: 'text' },
];

const formColsUpdDel = [
  { field: 'genreId', label: 'Genre ID', type: 'text' },
  { field: 'genreName', label: 'Genre', type: 'text' },
];

const Genre = (props) => {
  const classes = useStyles(props);
  const genres = useSelector((state) => state.genres.genres);
  const loading = useSelector((state) => state.genres.loading);
  const dispatch = useDispatch();

  const createGenre = (genre) => genreActions.addGenre(genre);
  const updateGenre = (genre) => genreActions.updateGenre(genre);
  const deleteGenre = (genre) => genreActions.deleteGenre(genre);
  const getGenres = () => dispatch(genreActions.getGenres());

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div className={classes.root}>
      {/* Temp div style */}
      <EntityTable
        addAction={() => (
          <InputModal
            action={createGenre}
            columns={formColumns}
            details='Enter details for the new genre you would like to add.'
            title={<Icon name='add' color='white' />}
            titleText='New Genre'
            refresh={getGenres}
          />
        )}
        deleteAction={(info) => (
          <InputModal
            action={deleteGenre}
            columns={formColsUpdDel}
            details='Review details of the genre you are about to delete.'
            info={info}
            modal='delete'
            title={<Icon name='delete' color='white' />}
            titleText='Delete Genre'
            refresh={getGenres}
          />
        )}
        updateAction={(info) => (
          <InputModal
            action={updateGenre}
            columns={formColsUpdDel}
            details='Edit details for the genre you would like to update.'
            info={info}
            modal='update'
            title={<Icon name='edit' color='white' />}
            titleText='Update Borrower'
            refresh={getGenres}
          />
        )}
        icon='library'
        rows={genres}
        cols={columns}
        loading={loading}
      />
    </div>
  );
};

export default Genre;
