import * as actionTypes from './actionTypes';
import updateObject from '../utils';


//reading Borrowers
const initialState = {
    borrowers: null,
    error: null,
    loading: false
}

const getBorrowersStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const getBorrowersSuccess = (state, action) => updateObject(state, {
    borrowers: action.borrowers,
    error: null,
    loading: false
})

const getBorrowersFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const borrowersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BORROWERS_STARTED: return getBorrowersStarted(state, action);
        case actionTypes.GET_BORROWERS_SUCCESS: return getBorrowersSuccess(state, action);
        case actionTypes.GET_BORROWERS_FAILURE: return getBorrowersFailure(state, action);
        default: return state;
    }
}

//adding Borrower
const initialStateCreate = {
    borrower: null,
    error: null,
    loading: false
}

const addBorrowerStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const addBorrowerSuccess = (state, action) => updateObject(state, {
    borrower: action.borrower
})

const addBorrowerFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const createBorrowerReducer = (state = initialStateCreate, action) => {
    switch (action.type) {
        case actionTypes.ADD_BORROWER_STARTED: return addBorrowerStarted(state, action);
        case actionTypes.ADD_BORROWER_SUCCESS: return addBorrowerSuccess(state, action);
        case actionTypes.ADD_BORROWER_FAILURE: return addBorrowerFailure(state, action);
        default: return state;
    }
}

//updating Borrower
const initialStateUpdate = {
    borrower: null,
    error: null,
    loading: false
}

const updateBorrowerStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const updateBorrowerSuccess = (state, action) => updateObject(state, {
    borrower: action.borrower,
    error: null,
    loading: false
})

const updateBorrowerFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const updateBorrowerReducer = (state = initialStateUpdate, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_BORROWER_STARTED: return updateBorrowerStarted(state, action);
        case actionTypes.UPDATE_BORROWER_SUCCESS: return updateBorrowerSuccess(state, action);
        case actionTypes.UPDATE_BORROWER_FAILURE: return updateBorrowerFailure(state, action);
        default: return state;
    }
}

//deleting Borrower
const initialStateDelete = {
    borrower: null,
    error: null,
    loading: false
}

const deleteBorrowerStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const deleteBorrowerSuccess = (state, action) => updateObject(state, {
    borrower: action.borrower,
    error: null,
    loading: false
})

const deleteBorrowerFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const deleteBorrowerReducer = (state = initialStateDelete, action) => {
    switch (action.type) {
        case actionTypes.DELETE_BORROWER_STARTED: return deleteBorrowerStarted(state, action);
        case actionTypes.DELETE_BORROWER_SUCCESS: return deleteBorrowerSuccess(state, action);
        case actionTypes.DELETE_BORROWER_FAILURE: return deleteBorrowerFailure(state, action);
        default: return state;
    }
}

export {
    borrowersReducer,
    createBorrowerReducer,
    updateBorrowerReducer,
    deleteBorrowerReducer
}
