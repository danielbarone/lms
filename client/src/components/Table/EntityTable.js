import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridOverlay,
} from '@material-ui/data-grid';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import useStyles from './EntityTable.styles';
import { CustomChip, Icon, Svg } from '..';

const CustomOverlay = (props) => {
  const classes = useStyles(props);
  const { overlay } = props;

  const indicators = {
    linear: (
      <div className={classes.linearProgress}>
        <LinearProgress />
      </div>
    ),
    spinner: (
      <div className={classes.spinnerContainer}>
        <CircularProgress className={classes.spinner} />
      </div>
    ),
  };
  const overlays = {
    loading: (
      <GridOverlay className={classes.gridOverlay}>
        {props.indicator ? indicators[props.indicator] : indicators.spinner}
      </GridOverlay>
    ),
    noRows: (
      <GridOverlay className={classes.noRowsOverlay}>
        <Svg name='noData' />
        <div className={classes.label}>No Rows</div>
      </GridOverlay>
    ),
  };

  return overlays[overlay];
};

CustomOverlay.propTypes = {
  overlay: PropTypes.string,
};

const EntityTable = (props) => {
  const classes = useStyles(props);
  const { cols, rows } = props;
  const [selection, setSelection] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(rows || []);
  }, [rows]);

  return (
    <div>
      <div className={classes.root}>
        <DataGrid
          checkboxSelection
          className={classes.dataGrid}
          disableClickEventBubbling
          onSelectionChange={(newSelection) => {
            setSelection(newSelection.rows);
          }}
          rows={data}
          columns={cols.map((column) => ({
            ...column,
            disableClickEventBubbling: false,
          }))}
          components={{
            // eslint-disable-next-line react/display-name
            loadingOverlay: () => <CustomOverlay overlay='loading' indicator='spinner' />,
            // eslint-disable-next-line react/display-name
            noRowsOverlay: () => <CustomOverlay overlay='noRows' />,
          }}
          loading={props.loading}
        />
      </div>
      <div>
      {selection.map((v, i) => (
        <CustomChip
          key={`selection-key-${i}`}
          label={v.name}
          icon={<Icon name='face' />}
       />
      ))}
    </div>
  </div>
  );
};

EntityTable.propTypes = {
  cols: PropTypes.array,
  loading: PropTypes.bool,
  rows: PropTypes.array,
};

export default EntityTable;
