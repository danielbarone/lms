import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DataGrid,
  GridOverlay,
} from '@material-ui/data-grid';
import { CircularProgress, LinearProgress, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
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
  const [currentLoan, setCurrentLoan]= useState([]);
  const [warnAlert, setWarnAlert] = useState(true);
  const [seeAlert, setSeeAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [loanSucc, setLoanSucc] = useState("The return was a success.")
  const dispatch = useDispatch();
//    console.log("Table2");
//    console.log(props);
//   console.log(data);


const LoanAlert = () => {
  if(warnAlert){
  return(
    <div>
  <Alert severity="warning">You have already returned the book '{currentLoan.title}' on {currentLoan.dateIn}.</Alert>
    </div>
  )
}
else{
  return(
    <div>
  <Alert severity="success"> {loanSucc}   </Alert>
    </div>
  )
}
}



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

    ///Should this have a confirmation like checkout?
    //Also will change bookId to just have title
    //alert("You have returned bookId: '"+ loan.bookId+"' on "+DI2)
    var shortDI2=(""+DI2).substring(0,10);
    setLoanSucc("You have succesfully returned the book: '"+ loan.title+"' on "+shortDI2);
    setSeeAlert(true);
    setWarnAlert(false);
    setCurrentLoan([]);
    //console.log("isReturning")
  }



  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

   function AlertDialogSlide() {
  
     function returnBook (){
      isReturningBook(currentLoan);    
     }
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button> */}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Confirm return."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Please confirm that you wish to return the book '
              <span style={{ color: 'blue' }}>
              {currentLoan.title}
              </span>
              '.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() =>{setOpen(false)}} color="primary">
              Cancel
            </Button>
            <Button onClick= {()=>
            {  
              returnBook();
              setOpen(false);
               }
            } 
             
                color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }



  useEffect(() => {
      //console.log("ET3 Use Effect");
      if(returningBook){
          //console.log("Returning Book");
          //console.log(returnLoan);
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
      { seeAlert ? <LoanAlert /> : null }
      { open ? <AlertDialogSlide /> : null }
        <DataGrid
          //checkboxSelection
          className={classes.dataGrid}
          //disableClickEventBubbling
         // disableSelectionOnClick = {(true) ? false : true}
          onSelectionChange={(newSelection) => {
            setSelection(newSelection.rows);
          }}
         // rows={data}
         hideFooter={true}
         rows={data.map((rows) => ({
            ...rows,
            
            //disableSelectionOnClick: (true) ? false : true,
          }))}
          columns={cols.map((column) => ({
            ...column,
            disableClickEventBubbling: false,
          }))}
          
          onRowClick={(evt,rowData)=>{{
            //  console.log("RowData");
            //   console.log(evt);
            //  console.log(evt.rowModel);
             setCurrentLoan(evt.rowModel.data);
              if(evt.rowModel.data.dateIn!= null && evt.rowModel.data.dateIn != "null" ){
                
                  //console.log("You have already returned this book");
                  setWarnAlert(true);
                  setSeeAlert(true);
                  //alert("You have already returned this book");
              }
              else{
                setCurrentLoan(evt.rowModel.data);
                AlertDialogSlide();
                setOpen(true);
                //isReturningBook(evt.rowModel.data);
                  //console.log("Returned Book");
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
