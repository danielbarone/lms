/* React */
import React, { useEffect, useState, useCallback } from 'react';
import { Button, CircularProgress, TextField, Hidden } from '@material-ui/core';


/* Components */
import { borrowerApi } from '../../utils/api';
/* Styles */
import useStyles from './BorrowerInput.styles';
import GetBorrower from './GetBorrower';
import GetBorrowerLoans from './GetBorrowerLoans';
import GetBorrowerBranchLoans from './GetBorrowerBranchLoans';
import Branch from '../Branch/Branch';
import BranchSelector from '../Branch/BranchSelector';
import GetBranchCopies from './GetBranchCopies';
//import { useSelector } from 'react-redux';
//import { BranchList } from '..';




//   useEffect(() => {
//     loadBranches();
//   }, []);

const BorrowerInput = (props) => {

    const classes = useStyles(props);
    //const cardNo = 123;
    //var textCardNo = 111;
    //const theState = useSelector((state) => state);
    
    const [cardNo, setCardNo] = useState(0); 
    const [isBorrowLock, setBorrowLock] = useState(false); 
    const [buttonName1, setButtonName1] = useState("Submit");
    const [buttonName2, setButtonName2] = useState("View all your Loans");
    const [buttonName3, setButtonName3] = useState("Select Branch");
    const [seeLoans, setSeeLoans] = useState(false); 
    const [isBranchSelected, setIsBranchSelected] = useState(false);  
    const [branchId, setBranchId] = useState(2);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isReturning, setIsReturning] = useState(false);
    const [isCardNoGood, setIsCardNoGood] = useState(false);


    //componentWillMount(){
        // var lTab = sessionStorage.getItem("lastTab");
        // sessionStorage.setItem("darkTheme", true);
        // if (isNaN(sessionStorage.getItem("lastTab"))) {
        //     sessionStorage.setItem("lastTab", 0);
        //   } else {
        //     this.setState({ activeTabIndex: parseInt(lTab) });
        //   }
    //}
    
    const handleCardNo = (cardNo) =>{
        if(cardNo == undefined){
            setIsCardNoGood(false);
        }
        else{
            setCardNo(cardNo)
            if(cardNo>0)
            setIsCardNoGood(true);
            else
            setIsCardNoGood(false);
        }
    }

    const handleBranchId = (branchId) =>{
        if(cardNo == undefined){

        }
        else{
            setBranchId(branchId)
        }
    }

    const handleBorrowLock = () =>{
        if(isBorrowLock){
            setButtonName1("Submit");
        }
        else{
            setButtonName1("Back to Borrower Selection");
        }
        setBorrowLock(!isBorrowLock)
        
    }

    const handleSeeLoans = () =>{
        if(seeLoans){
            setButtonName2("View all your Loans");
        }
        else{
            setButtonName2("Hide your Loans");
        }
        setSeeLoans(!seeLoans)
        
    }

    const handleBranchSelected = () =>{
        if(isBranchSelected){
            setButtonName3("Select Branch");
        }
        else{
            setButtonName3("Return to Branch Selection");
        }
        setIsBranchSelected(!isBranchSelected)
        
    }

    const handleIsCheckingOut = () =>{
        // if(isCheckingOut){
        //     setButtonName3("Select Branch");
        // }
        // else{
        //     setButtonName3("Return to Branch Selection");
        // }
        setIsCheckingOut(!isCheckingOut)
       
        
    }

    const handleIsReturning = () =>{
        // if(isCheckingOut){
        //     setButtonName3("Select Branch");
        // }
        // else{
        //     setButtonName3("Return to Branch Selection");
        // }
        setIsReturning(!isReturning);
        
    }

    const handleBackCheckReturn = () =>{
        // if(isCheckingOut){
        //     setButtonName3("Select Branch");
        // }
        // else{
        //     setButtonName3("Return to Branch Selection");
        // }
        setIsCheckingOut(false);
        setIsReturning(false);
        
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

        else if(isCheckingOut | isReturning){
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

        else if(isBranchSelected){
            return(
                <div>
              
                <Button onClick={() => { handleBranchSelected() } } label ={"branchSelect"}>
                {buttonName3}
                </Button>
                <br/>
                    Current Branch: {branchId} <br />
                   Do you which to checkout a book or return a book? 
                   <br/> 
                <Button onClick={() => { handleIsCheckingOut()}} label={"checkout"}>
                Checkout
                </Button>
                   <Button onClick={() => { handleIsReturning()}} label={"return"}>
                Return A Book
                </Button>
                </div>
            
            )
        }
        else{
            return(
            <div>
                <BranchSelector cardNo={cardNo} />
            </div>
        )
        }
    }


    const RenderBorrowerLoans = () =>{
        if(!seeLoans){
            return null;
        }
        else{return(
            <div>
                <GetBorrowerLoans cardNo={cardNo} />
            </div>
        )
        }
    }

    const RenderBorrowerLoansButton = () =>{
        if(!isBorrowLock){
            return null;
        }
        else{return(
            <div>
              <Button onClick={() => { handleSeeLoans() } } label ={"seeLoans"}>
                {buttonName2}
                </Button>
                <RenderBorrowerLoans />
            </div>
        )
        }
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



    const RenderBookCopies = () =>{
        if(!isBranchSelected){
            return null;
        }
        else{return(
            <div>
                <GetBorrowerLoans cardNo={cardNo} />
            </div>
        )
        }
    }
    
    const RenderTextHead = () =>{
        return(
            <div>
                
      Please enter your borrower Id<br/>
            </div>
        )
    }


    //Fix color on text field later
   if (props.cardNo){
       if(!cardNo){
           setCardNo(props.cardNo)
       }
    // handleBorrowLock()
    if(!isBorrowLock){
        setBorrowLock(true)
    }
    return(
        <div>
        {/* CardNo {props.cardNo} */}
        
        <RenderBorrower /> 
        <br />
        <RenderBranches /> <br />
        </div> 
    )
   }
   else
return(
    <div className={classes.root}>
      {/* Borrowers.....
      Please enter your borrower Id<br/> */}
      { isBorrowLock ? null : <RenderTextHead /> }
    {/* <RenderCardNoInput /> */}
      {props.cardNo}
    { isBorrowLock ? null :
    <TextField id="cardNoField" type="number"  InputProps={{
    className: classes.root
  }}
  disabled={isBorrowLock}
  autoFocus={true} 
  label="cardNo"
  placeholder="000"
  style = {{width: 70}}
  hidden={isBorrowLock}
  
onChange={(e) => handleCardNo(e.target.value)}
   />
    }

 
  <Button 
  onClick={() => { handleBorrowLock() } }
   label ={"Lock"}
    className={classes.button1}
    disabled={!isCardNoGood}
    >
      {buttonName1}
  </Button> 
       <RenderBorrower /> 
       <br />
       {/* <RenderBorrowerLoansButton /> <br /> */}
       <RenderBranches /> <br />      
    </div>
);
}

export default BorrowerInput;

