import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridOverlay,
} from '@material-ui/data-grid';
import { LinearProgress } from '@material-ui/core';
import useStyles from './BranchTable.styles';

import columns from './Branch.constants';

const CustomLoadingOverlay = (props) => {
  const classes = useStyles(props);

  return (
    <GridOverlay className={classes.gridOverlay}>
      <div className={classes.linearProgress}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
};

CustomLoadingOverlay.propTypes = {
  linearProgress: PropTypes.any,
};

const BranchTable = (props) => {
  const classes = useStyles(props);
  const [selection, setSelection] = useState([]);
  const [data, setData] = useState([]);

  const createRows = (branches) => branches.map((v) => ({
    id: v.branchId,
    branchName: v.branchName,
    branchAddress: v.branchAddress,
  }));

  useEffect(() => {
    setData(createRows(props.data || []));
  }, [props.data]);

  return (
    <div>
      <div className={classes.root}>
        <DataGrid
          checkboxSelection
          className={classes.dataGrid}
          disableClickEventBubbling
          onSelectionChange={(newSelection) => {
            setSelection(newSelection.rows);
            console.log(selection);
          }}
          rows={data}
          columns={columns.map((column) => ({
            ...column,
            disableClickEventBubbling: false,
          }))}
          components={{
            loadingOverlay: CustomLoadingOverlay,
          }}
          loading={!props.data}
        />
      </div>
      <div>
      {selection.map((v, i) => (
        <div key={`selection-key-${i}`}>
          {v.id}
        </div>
      ))}
    </div>
  </div>
  );
};

BranchTable.propTypes = {
  data: PropTypes.any,
};

export default BranchTable;
