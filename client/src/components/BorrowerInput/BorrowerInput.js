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
import GetBranchCopies from './GetBranchCopies';
//import { BranchList } from '..';




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
    const [buttonName2, setButtonName2] = useState("View all your Loans");
    const [buttonName3, setButtonName3] = useState("Select Branch");
    const [seeLoans, setSeeLoans] = useState(false); 
    const [isBranchSelected, setIsBranchSelected] = useState(false);  
    const [branchId, setBranchId] = useState(2);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isReturning, setIsReturning] = useState(false);


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

        }
        else{
            setCardNo(cardNo)
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
            setButtonName1("Back");
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
               {/* <RenderBranchCopies /> */}
                </div>
            
            )
        }
        else{
            return(
            <div>
            {/* ########
            <br/>
            Branch List
            <br />
            ######## */}
                {/* <BranchList /> */}
                {/*This text field will be taken out once the ui table works */}
                <TextField id="branchIdField" type="number"  InputProps={{
                        className: classes.root
                    }}
                    // disabled={isBorrowLock}
                    autoFocus={true} 
                    label="branchId"
                    placeholder="000"
                    style = {{width: 70}}
                        onChange={(e) => handleBranchId(e.target.value)}
                    />
                    <Button onClick={() => { handleBranchSelected() } } label ={"branchSelect"}>
                {buttonName3}
                </Button>
                <Branch />
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

    // const RenderCardNoInput = () =>{
    //     if(isBorrowLock){
    //         return(
    //             <div>

    //         <Button onClick={() => { handleBorrowLock() } } label ={"Lock"}>
    //         {buttonName1}
    //     </Button>
    //             </div>
    //         )
    //     }
    //     else{return(
    //         <div>
    //         <TextField id="cardNoField" type="number"  InputProps={{
    //             className: classes.root
    //         }}
    //         disabled={isBorrowLock}
    //         autoFocus={true} 
    //         label="cardNo"
    //         placeholder="000"
    //         style = {{width: 70}}
            
    //         onChange={(e) => handleCardNo(e.target.value)}
    //         />
    //         <Button onClick={() => { handleBorrowLock() } } label ={"Lock"}>
    //         {buttonName1}
    //         </Button>
    //         </div>
    //     )
    //     }
    // }

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
    


    //Fix color on text field later
return(
    <div className={classes.root}>
    
    {/* <RenderCardNoInput /> */}
    
    <TextField id="cardNoField" type="number"  InputProps={{
    className: classes.root
  }}
  disabled={isBorrowLock}
  autoFocus={true} 
  label="cardNo"
  placeholder="000"
  style = {{width: 70}}
  
onChange={(e) => handleCardNo(e.target.value)}
   />

 
  <Button onClick={() => { handleBorrowLock() } } label ={"Lock"}>
      {buttonName1}
  </Button> 
       <RenderBorrower /> <br />
       <RenderBorrowerLoansButton /> <br />
       <RenderBranches /> <br />
       {/* For Testing remove later */}
       {/* <GetBranchCopies branchId={1} cardNo={123}  /><br/> */}
       {/* <GetBorrowerBranchLoans cardNo={123} branchId={1} /><br/> */}
        
    </div>
);
}

export default BorrowerInput;

