/* React */
import React, { useEffect, useState, useCallback } from 'react';
/* Styles */
import useStyles from './Genre.styles';
/* Components */
import { adminApi } from '../../utils/api';
import { EntityTable } from '..';

const columns = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'name', headerName: 'Genre', width: 250 },
];

const Genre = (props) => {
  const classes = useStyles(props);
  const [genres, setGenres] = useState(null);

  const createRows = (gs) => gs.map((v) => ({
    id: v.genreId,
    name: v.genreName || '--',
  }));

  const loadGenres = useCallback(() => {
    adminApi.genres().getAll().then((response) => {
      setGenres(createRows(response.data));
    });
  }, []);

  useEffect(() => {
    loadGenres();
  }, [loadGenres]);

  return (
    <div className={classes.root}>
      <EntityTable rows={genres} cols={columns} tblWidth='25%' />
    </div>
  );
};

export default Genre;
