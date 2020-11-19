import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridOverlay,
} from '@material-ui/data-grid';
import {Button, CircularProgress, LinearProgress } from '@material-ui/core';
import useStyles from './EntityTable.styles';
import { CustomChip, Icon, Svg } from '..';
import { loanActions } from '../../services/actions';
import { useDispatch, useSelector } from 'react-redux';
import GetBorrowerBranchLoans from '../BorrowerInput/GetBorrowerBranchLoans';
import GetBranchCopies from '../BorrowerInput/GetBranchCopies';


//const [Book, setBook] = useState([]);


const CustomOverlay = (props) => {
  const classes = useStyles(props);
  const { msg, overlay } = props;

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

const EntityTable4 = (props) => {
  const classes = useStyles(props);
  const { cols, rows } = props;
//   const cardNo = props.cardNo;
  const [selection, setSelection] = useState([]);
  const [branch, setBranch] = useState([]);

  const [selectingBranch, setSelectingBranch] = useState(false);
  const [branchSelected, setBranchSelected] = useState(false);
  const [branchId, setBranchId] = useState();
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const dispatch = useDispatch();
  const cardNo = props.cardNo;
//    console.log("Table2");
//    console.log(props);
//   console.log(data);

const handleBackCheckReturn = () =>{
    setIsCheckingOut(false);
    setIsReturning(false);   
}

const RenderBranchCopies = () =>{
    if(!isCheckingOut)
    return null;

    return(
        <div>
        <GetBranchCopies branchId={branchId} cardNo={cardNo}  />
        </div>
    )
}

const RenderBorrowerBranchLoans = () =>{
    if(!isReturning)
    return null;

    return(
        <div>
        
        <GetBorrowerBranchLoans cardNo={cardNo} branchId={branchId} />
        </div>
    )
}


function selectBranch (branch){
    // console.log("Branch");
    // console.log(branch);
    setSelectingBranch(true);
    setCounter(counter+1);
    setBranchId(branch.id);
    //console.log("selecting Branch")
  }




  useEffect(() => {
      //console.log("ET4 Use Effect");
      if(selectingBranch){
          //console.log("Selecting Branch");
        setSelectingBranch(false);
        setBranchSelected(true);
      }
    setData(rows || []);
  }, [rows, counter]);

  if(branchSelected){
   if(isCheckingOut | isReturning){
        return(
            <div>
                <Button onClick={() => { handleBackCheckReturn()}} label={"checkout"}>
            Go Back
            </Button>
            <RenderBranchCopies />
            <RenderBorrowerBranchLoans />
            </div>
        )
        }
      return(

      <div>
      
           <Button onClick={() => { setBranchSelected(false)}} label={"checkout"}>
                Go Back To Branch Selection
                </Button> <br />
                <br/>
                    Current Branch: {branchId} <br />
                   Do you which to checkout a book or return a book? 
                   <br/> 
                <Button onClick={() => { setIsCheckingOut(true)}} label={"checkout"}>
                Checkout
                </Button>
                   <Button onClick={() => { setIsReturning(true)}} label={"return"}>
                Return A Book
                </Button>
                {/* <GetBranchCopies branchId={branchId} cardNo={cardNo}  /> */}
      </div>
      )

  }
  else{

  
  return (
    <div>
      <div className={classes.root}>
        <DataGrid
          //checkboxSelection
          className={classes.dataGrid}
          //disableClickEventBubbling
         // disableSelectionOnClick = {(true) ? false : true}
          onSelectionChange={(newSelection) => {
            setSelection(newSelection.rows);
          }}
         // rows={data}
         rows={data.map((rows) => ({
            ...rows,
            
            //disableSelectionOnClick: (true) ? false : true,
          }))}
          columns={cols.map((column) => ({
            ...column,
            disableClickEventBubbling: false,
          }))}
          
          onRowClick={(evt)=>{{
            //   console.log("branchData");
            //   console.log(evt.data);
              selectBranch(evt.rowModel.data);
              }}}
          components={{
            // eslint-disable-next-line react/display-name
            loadingOverlay: () => <CustomOverlay overlay='loading' indicator='spinner' />,
            // eslint-disable-next-line react/display-name
            noRowsOverlay: () => <CustomOverlay overlay='noRows' msg={rows ? 'No data available.' : 'Failed to retrieve data.'} />,
          }}
          loading={props.loading}
        />
      </div>
      <div className={classes.selectedContainer}>
        {selection ? (
          selection.map((v, i) => (
            <CustomChip
              key={`selection-key-${i}`}
              label={v.name}
              icon={
                <Icon name={props.icon} color='purple' />
              }
              style='outlined'
              color='PURPLE'
            />
          ))
        ) : ''}
      </div>
  </div>
  );
            }
};

EntityTable4.propTypes = {
  cols: PropTypes.array,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  rows: PropTypes.array,
};

export default EntityTable4;
