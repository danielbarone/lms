/* React */
import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo';
import CircularProgress from '@material-ui/core/CircularProgress';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import useStyles from './Result.styles';
import * as queries from '../../utils/queries';

const Result = (props) => {
  const classes = useStyles(props);

  const { data, loading } = useQuery(queries.results, {
    variables: {
      orderId: props.orderId,
    },
  });

  if (loading) return <CircularProgress />;

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={4} spacing={1}>
        {data.results.map((result) => (
          <GridListTile key={result.image} cols={1} rows={2}>
            <img src={result.image} alt='...' />
            <GridListTileBar
              title={props.name}
              subtitle={<span>Age: {props.age}</span>}
              actionIcon={
                <IconButton aria-label={'info about ...'} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

Result.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  orderId: PropTypes.string,
};

export default Result;
