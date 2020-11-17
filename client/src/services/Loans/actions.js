import * as actionTypes from './actionTypes';

import admin from '../api';

//reading loans
const getLoansStarted = (loading) => ({
    type: actionTypes.GET_LOANS_STARTED,
    loading
})

const getLoansSuccess = (loans) => ({
    type: actionTypes.GET_LOANS_SUCCESS,
    loans
})

const getLoansFailure = (error) => ({
    type: actionTypes.GET_LOANS_FAILURE,
    error
})

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

export {
    getLoans
}
