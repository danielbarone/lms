/* React */
import React, { useEffect, useState, useCallback } from 'react';
import { Button, CircularProgress, TextField } from '@material-ui/core';


/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';
import GetBorrower from './GetBorrower';
import { BranchList } from '..';




//   useEffect(() => {
//     loadBranches();
//   }, []);

const BorrowerInput = (props) => {

    const classes = useStyles(props);
    //const cardNo = 123;
    //var textCardNo = 111;
   
    const [cardNo, setCardNo] = useState(0); 
    const [isBorrowLock, setBorrowLock] = useState(false); 
    const [buttonName1, setButtonName1] = useState("Submit"); 
    
    const handleCardNo = (cardNo) =>{
        if(cardNo == undefined){

        }
        else{
            setCardNo(cardNo)
        }
    }

    const handleBorrowLock = () =>{
        if(isBorrowLock){
            setButtonName1("Submit");
        }
        else{
            setButtonName1("Back");
        }
        setBorrowLock(!isBorrowLock)
        
    }

    const RenderBorrower = () =>{
        if(!cardNo){
            return null;
        }
        else{return(
            <div>
                <GetBorrower cardNo={cardNo} />
            </div>
        )
        }
    }

    const RenderBranches = () =>{
        if(!isBorrowLock){
            return null;
        }
        else{return(
            <div>
            ########
            <br/>
            Branch List
            <br />
            ########
                <BranchList />
            </div>
        )
        }
    }


    //Fix color on text field later
return(
    <div className={classes.root}>
    <TextField id="cardNoField" type="number"  InputProps={{
    className: classes.root
  }}
  disabled={isBorrowLock}
  //value={props.cardNo} onChange={this._handleTextFieldChange}
  //value={textCardNo} 
onChange={(e) => handleCardNo(e.target.value)}
   />
   {/* Hitting enter will bring up the library selection */}
  {/* <Button onClick={() => { alert(cardNo) }}>
      Enter
  </Button> */}
  <Button onClick={() => { handleBorrowLock() } } label ={"Lock"}>
      {buttonName1}
  </Button>
       <RenderBorrower />
       <RenderBranches />
  
    </div>
);
}

export default BorrowerInput;

