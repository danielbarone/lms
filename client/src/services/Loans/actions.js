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

//overriding loan
const overrideStarted = (loading) => ({
    type: actionTypes.OVERRIDE_STARTED,
    loading
})

const overrideSuccess = (loan) => ({
    type: actionTypes.OVERRIDE_SUCCESS,
    loan
})

const overrideFailure = (error) => ({
    type: actionTypes.OVERRIDE_FAILURE,
    error
})

const overrideLoan = (loan) => (dispatch) => {
    dispatch(overrideStarted(true));

    return admin.loans().overrideDueDate(loan).then((res) => {
        dispatch(overrideSuccess(loan));
        return res;
    }).catch((err) => dispatch(overrideFailure(err)));
}

export {
    getLoans,
    overrideLoan
}
