import {
    GET_Borrowers_STARTED,
    GET_Borrowers_SUCCESS,
    GET_Borrowers_FAILURE,
  } from './actionTypes';
  
  import { borrower}  from '../api';
  
  const getBorrowersStarted = (loading) => ({
    type: GET_Borrowers_STARTED,
    loading,
  });
  
  const getBorrowersSuccess = (Borrowers) => ({
    type: GET_Borrowers_SUCCESS,
    Borrowers,
  });
  
  const getBorrowersFailure = (error) => ({
    type: GET_Borrowers_FAILURE,
    error,
  });
  
//   const parseBranchData = (Borrowers) => Borrowers.map(
//     (b) => ({
//       cardNo: b.cardNo,
//       name: b.name,
//      // address: b.address,
//     }),
//   );

const parseBorrowerData = (Borrowers) => ({
       
      cardNo: Borrowers.cardNo,
      name: Borrowers.name,
     // address: b.address,
    }
  );
  
  // const getBorrowers = () => (dispatch) => {
  //   dispatch(getBorrowersStarted(true));
  
  //   borrower.Borrowers().getAll()
  //     .then((response) => {
  //       const borrowers = parseBorrowerData(response.data);
  //       dispatch(getBorrowersSuccess(borrowers));
  //     })
  //     .catch((e) => dispatch(getBorrowersFailure(e)));
  // };

  const getBorrowerByCardNo = (cardNo) => (dispatch) => {
    dispatch(getBorrowersStarted(true));
    borrower.borrower().getByCardNo(cardNo)
      .then((response) => {
        const borrowers = parseBorrowerData(response.data);
        dispatch(getBorrowersSuccess(borrowers));
      })
      .catch((e) => dispatch(getBorrowersFailure(e)));
     
  };

////This action should be in branches. 
///It's just here for now to avoid merge conflics

// const getBookCopiesByBranchId = (branchId) => (dispatch) => {
//   dispatch(getBorrowersStarted(true));
//   borrower.borrower().getBookCopiesByBranchId(branchId)
//     .then((response) => {
//       const borrowers = parseBorrowerData(response.data);
//       dispatch(getBorrowersSuccess(borrowers));
//     })
//     .catch((e) => dispatch(getBorrowersFailure(e)));
   
// };

  
  export {
    // eslint-disable-next-line import/prefer-default-export
    //getBorrowers,
    getBorrowerByCardNo,
  };
  