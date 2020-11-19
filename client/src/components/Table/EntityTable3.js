import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridOverlay,
} from '@material-ui/data-grid';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import useStyles from './EntityTable.styles';
import { CustomChip, Icon, Svg } from '..';
import { loanActions } from '../../services/actions';
import { useDispatch, useSelector } from 'react-redux';


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

const EntityTable3 = (props) => {
  const classes = useStyles(props);
  const { cols, rows } = props;
  const cardNo = props.cardNo;
  const [selection, setSelection] = useState([]);
  const [returnLoan, setReturnLoan] = useState([]);
  const [dateOut2, setDateOut] = useState();
  const [dueDate2, setDueDate] = useState();
  const [dateIn2, setDateIn] = useState();
  const [returningBook, setReturningBook] = useState(false);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
//    console.log("Table2");
//    console.log(props);
//   console.log(data);


function isReturningBook (loan){
    
    var dateOut = new Date();
    var dueDate = new Date();
    dueDate.setDate(dateOut.getDate()+7);
    
    // var cardNo = loan.cardNo;
    // var branchId = loan.branchId;
    // var bookId = loan.bookId;
    var dateOut = loan.dateOut;
    var dueDate = loan.dueDate;
    var dateIn = new Date();
    let sqlDO = new Date(dateOut).toISOString().slice(0, 19).replace('T', ' ');
    let sqlDI = new Date(dateIn).toISOString().slice(0, 19).replace('T', ' ');
    let sqlDD = new Date(dueDate).toISOString().slice(0, 19).replace('T', ' ');
  

    let DO2 = sqlDO.substring(0,10)+"T00:00:00.000Z";
    let DD2 = sqlDD.substring(0,10)+"T00:00:00.000Z";
    let DI2 = sqlDI.substring(0,10)+"T00:00:00.000Z";
  
    // setBookId(bookId);
    // setBranchId(branchId);
    // setCardNo(cardNo);
    setDateOut(DO2);
    setDueDate(DD2);
    setDateIn(DI2);
    setReturnLoan(loan);
    setReturningBook(true);
    setCounter(counter+1);
    console.log("isReturning")
  }




  useEffect(() => {
      //console.log("ET3 Use Effect");
      if(returningBook){
          console.log("Returning Book");
          console.log(returnLoan);
          //console.log(cardNo);
        dispatch(loanActions.returnBook(returnLoan.bookId, returnLoan.branchId, returnLoan.cardNo, dateOut2, dueDate2, dateIn2));
        //  dispatch(loanActions.checkOutBook(checkOutBook.bookId, checkOutBook.branchId, cardNo, dateOut2, dueDate2));
          setReturningBook(false);
      }
    setData(rows || []);
  }, [rows, counter]);

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
          
          onRowClick={(evt,rowData)=>{{
              //console.log(evt);
             // console.log("RowData");
             // console.log(evt.rowModel);
              if(evt.rowModel.data.dateIn != "null"){
                  //console.log("No go")
                  console.log("You have already returned this book");
              }
              else{
                isReturningBook(evt.rowModel.data);
                  console.log("Returned Book");
              }
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
};

EntityTable3.propTypes = {
  cols: PropTypes.array,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  rows: PropTypes.array,
};

export default EntityTable3;
