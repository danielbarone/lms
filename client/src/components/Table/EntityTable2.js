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

const EntityTable2 = (props) => {
  const classes = useStyles(props);
  const { cols, rows } = props;
  const cardNo = props.cardNo;
  const [selection, setSelection] = useState([]);
  const [checkOutBook, setCheckOutBook] = useState([]);
  const [dateOut2, setDateOut] = useState();
  const [dueDate2, setDueDate] = useState();
  const [checkingOut, setCheckingOut] = useState(false);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
//    console.log("Table2");
//    console.log(props);
//   console.log(data);


function isCheckingOut (book){
    
    var dateOut = new Date();
    var dueDate = new Date();
    dueDate.setDate(dateOut.getDate()+7);
    // let sqlDO = new Date(dateOut).toISOString().slice(0, 19).replace('T', ' ');
    // let sqlDD = new Date(dueDate).toISOString().slice(0, 19).replace('T', ' ');
  

    // setBookId(bookId);
    // setBranchId(props.branchId);
    // setCardNo(props.cardNo);
    setDateOut(dateOut);
    setDueDate(dueDate);
    setCheckOutBook(book);
    setCheckingOut(true);
    setCounter(counter+1);
    // setBookCheckedOut(true);
    // console.log("Book");
    // console.log(book);

    ///Change this to a confirmation at some point
    alert("You have checked out '"+book.title
    +"'. It will be due by "+dueDate+".");
  // console.log("Is checking out now"); 
  }




  useEffect(() => {
      //console.log("ET2 Use Effect");
      if(checkingOut){
          //console.log("CheckingOut");
          //console.log(checkOutBook);
          //console.log(cardNo);
          dispatch(loanActions.checkOutBook(checkOutBook.bookId, checkOutBook.branchId, cardNo, dateOut2, dueDate2));
          setCheckingOut(false);
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
            //   console.log(evt);
            //   console.log("RowData");
            //   console.log(evt.rowModel);
              if(evt.rowModel.data.locked){
                  //Replace this with a model?
                  //console.log("You already have this book checked out");
                  alert("You already have this book checked out")
              }
              else{
                  ///Eventually add confirmation they want 2 check out
                  ////dueDate is created twice, should b eaway around that
                //   var dueDate = new Date();
                // dueDate.setDate(dueDate.getDate()+7);
                isCheckingOut(evt.rowModel.data);
               
                  //console.log("Book checked out");
                  //console.log(evt.rowModel.data);
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

EntityTable2.propTypes = {
  cols: PropTypes.array,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  rows: PropTypes.array,
};

export default EntityTable2;
