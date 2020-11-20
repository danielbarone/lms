import * as actionTypes from './actionTypes';
import admin from '../api';

//reading borrowers
const getBorrowersStarted = (loading) => ({
    type: actionTypes.GET_BORROWERS_STARTED,
    loading
})

const getBorrowersSuccess = (borrowers) => ({
    type: actionTypes.GET_BORROWERS_SUCCESS,
    borrowers
})

const getBorrowersFailure = (error) => ({
    type: actionTypes.GET_BORROWERS_FAILURE,
    error
})

const parseBorrowersData = (borrowers) => borrowers.map(
    (b) => ({
        id: b.cardNo,
        name: b.name,
        address: b.address,
        phone: b.phone
    })
)

const getBorrowers = () => (dispatch) => {
    dispatch(getBorrowersStarted(true));

    admin.borrowers().getAll().then((res) => {
        const borrowers = parseBorrowersData(res.data);
        dispatch(getBorrowersSuccess(borrowers));
    }).catch((e) => dispatch(getBorrowersFailure(e)));
}

//adding borrower
const addBorrowerStarted = (loading) => ({
    type: actionTypes.DELETE_BORROWER_STARTED,
    loading
})

const addBorrowerSuccess = (borrower) => ({
    type: actionTypes.ADD_BORROWER_SUCCESS,
    borrower
})

const addBorrowerFailure = (error) => ({
    type: actionTypes.ADD_BORROWER_FAILURE,
    error
})

const addBorrower = (borrower) => (dispatch) => {
    dispatch(addBorrowerStarted(true));

    return admin.borrowers().create(borrower).then((res) => {
        dispatch(addBorrowerSuccess(borrower));
        return res;
    }).catch((err) => dispatch(addBorrowerFailure(err)))
}

//updating borrower
const updateBorrowerStarted = (loading) => ({
    type: actionTypes.UPDATE_BORROWER_STARTED,
    loading
})

const updateBorrowerSuccess = (borrower) => ({
    type: actionTypes.UPDATE_BORROWER_SUCCESS,
    borrower
})

const updateBorrowerFailure = (error) => ({
    type: actionTypes.UPDATE_BORROWER_FAILURE,
    error
})

const updateBorrower = (borrower) => (dispatch) => {
    dispatch(updateBorrowerStarted(true));

    return admin.borrowers().update(borrower).then((res) => {
        dispatch(updateBorrowerSuccess(borrower));
        return res;
    }).catch((err) => dispatch(updateBorrowerFailure(err)));
}


//deleting a borrower
const deleteBorrowerStarted = (loading) => ({
    type: actionTypes.DELETE_BORROWER_STARTED,
    loading
})

const deleteBorrowerSuccess = (borrower) => ({
    type: actionTypes.DELETE_BORROWER_SUCCESS,
    borrower
})

const deleteBorrowerFailure = (error) => ({
    type: actionTypes.DELETE_BORROWER_FAILURE,
    error
})

const deleteBorrower = (borrower) => (dispatch) => {
    dispatch(deleteBorrowerStarted(true));

    return admin.borrowers().delete(borrower).then((res) => {
        dispatch(deleteBorrowerSuccess(borrower));
        return res;
    }).catch((err) => dispatch(deleteBorrowerFailure(err)));
}

export {
    getBorrowers,
    addBorrower,
    updateBorrower,
    deleteBorrower
}
