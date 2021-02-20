import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridOverlay,
} from '@material-ui/data-grid';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import useStyles from './EntityTable.styles';
import {
  CustomChip,
  Icon,
  Svg,
} from '..';

const CustomOverlay = (props) => {
  const classes = useStyles(props);
  const {
    msg,
    overlay,
  } = props;

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
        <div className={classes.label}>{msg}</div>
      </GridOverlay>
    ),
  };

  return overlays[overlay];
};

CustomOverlay.propTypes = {
  msg: PropTypes.string,
  overlay: PropTypes.string,
};

const EntityTable = (props) => {
  const classes = useStyles(props);
  const {
    addAction,
    cols,
    deleteAction,
    rows,
    updateAction,
  } = props;
  const [selection, setSelection] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(rows || []);
  }, [rows]);

  return (
    <div className={classes.root}>
      {selection.map((v, i) => (
          <div
            className={classes.selectedContainer}
            key={`action-btn-${v.name}-${i}`}
          >
            <div className={classes.selectedActions}>
              {addAction ? addAction() : ''}
              {deleteAction ? deleteAction(v) : ''}
              {updateAction ? updateAction(v) : ''}
            </div>
            <CustomChip
              key={`selection-key-${i}`}
              label={v.name}
              icon={
                <Icon name={props.icon} color='purple' />
              }
              style='outlined'
              color='PURPLE'
            />
          </div>
      ))}
      {selection.length === 0 && addAction ? (
        <div className={classes.selectedContainer}>
          {addAction()}
        </div>
      ) : ''}
      <DataGrid
        // checkboxSelection
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
          noRowsOverlay: () => <CustomOverlay overlay='noRows' msg={rows ? 'No data available.' : 'Failed to retrieve data.'} />,
        }}
        loading={props.loading}
      />
    </div>
  );
};

EntityTable.propTypes = {
  addAction: PropTypes.func,
  cols: PropTypes.array,
  deleteAction: PropTypes.func,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  rows: PropTypes.array,
  updateAction: PropTypes.func,
};

export default EntityTable;
