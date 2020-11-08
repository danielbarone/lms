/* React */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* Styles */
import useStyles from './Genre.styles';
/* Components */
import { EntityTable } from '..';
import { genreActions } from '../../services/actions';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Genre', width: 250 },
];

const Genre = (props) => {
  const classes = useStyles(props);
  const genres = useSelector((state) => state.genres.genres);
  const loading = useSelector((state) => state.genres.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(genreActions.getGenres());
  }, []);

  return (
    <div className={classes.root}>
      <EntityTable
        rows={genres}
        cols={columns}
        loading={loading}
        tblWidth='35%'
      />
    </div>
  );
};

export default Genre;
