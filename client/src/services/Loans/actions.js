import {
  GET_LOANS_STARTED,
  GET_LOANS_SUCCESS,
  GET_LOANS_FAILURE,
} from './actionTypes';

import * as actionTypes from './actionTypes';

import admin from '../api';
//import admin from '../api';
import {borrower}  from '../api';

const getLoansStarted = (loading) => ({
  type: GET_LOANS_STARTED,
  loading,
});

const getLoansSuccess = (loans) => ({
  type: GET_LOANS_SUCCESS,
  loans,
});

const getLoansFailure = (error) => ({
  type: GET_LOANS_FAILURE,
  error,
});



const parseLoanData2 = (loans) => loans.map(
  (l) => ({
    // id: l.genreId,
    // name: l.genreName || '--',
    cardNo: l.id.cardNo,
    branchId: l.id.branchId,
    bookId: l.id.bookId,
    dateOut: (""+l.dateOut).substring(0,10),
    dueDate: (""+l.dueDate).substring(0,10),
    dateIn: (""+l.dateIn).substring(0,10),
    id: ""+l.id.branchId+l.id.cardNo+l.id.bookId,
  }),
);

const getLoans2 = () => (dispatch) => {
  dispatch(getLoansStarted(true));

  borrower.loans().getAll()
    .then((response) => {
      const loans = parseLoanData2(response.data);
      dispatch(getLoansSuccess(loans));
    })
    .catch((e) => dispatch(getLoansFailure(e)));
};

const getLoansByCardNo = (cardNo) => (dispatch) => {
  dispatch(getLoansStarted(true));

  borrower.borrower().getLoansByCardNo(cardNo)
    .then((response) => {
      const loans = parseLoanData(response.data);
      dispatch(getLoansSuccess(loans));
    })
    .catch((e) => dispatch(getLoansFailure(e)));
};

const checkOutBook = (bookId, branchId, cardNo, dateOut, dueDate) => (dispatch) => {
  dispatch(getLoansStarted(true));

  borrower.borrower().checkOutBook(bookId, branchId, cardNo, dateOut, dueDate)
    .then((response) => {
      const loans = parseLoanData2(response.data);
      dispatch(getLoansSuccess(loans));
    })
    .catch((e) => dispatch(getLoansFailure(e)));
};

const returnBook = (bookId, branchId, cardNo, dateOut, dueDate, dateIn) => (dispatch) => {
  dispatch(getLoansStarted(true));

  borrower.borrower().returnBook(bookId, branchId, cardNo, dateOut, dueDate, dateIn)
    .then((response) => {
      const loans = parseLoanData2(response.data);
      dispatch(getLoansSuccess(loans));
    })
    .catch((e) => dispatch(getLoansFailure(e)));
};




//////////////////////
//reading loans
// const getLoansStarted = (loading) => ({
//     type: actionTypes.GET_LOANS_STARTED,
//     loading
// })

// const getLoansSuccess = (loans) => ({
//     type: actionTypes.GET_LOANS_SUCCESS,
//     loans
// })

// const getLoansFailure = (error) => ({
//     type: actionTypes.GET_LOANS_FAILURE,
//     error
// })

const parseLoanData = (loans) => loans.map(
    (l, index) => ({
        id: index + 1,
        bookId: l.id.bookId,
        branchId: l.id.branchId,
        cardNo: l.id.cardNo,
        dateOut: l.dateOut,
        dueDate: l.dueDate,
        dateIn: l.dateIn
    })
)

const getLoans = () => (dispatch) => {
    dispatch(getLoansStarted(true));

    admin.loans().getAll().then((res) => {
        const loans = parseLoanData(res.data);
        dispatch(getLoansSuccess(loans))
    }).catch((err) => dispatch(getLoansFailure(err)))
}

// export {
//     getLoans
// }
export {
  getLoans,
  getLoans2,
  getLoansByCardNo,
  checkOutBook,
  returnBook,
};
