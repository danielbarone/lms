import * as actionTypes from './actionTypes';
import updateObject from '../utils';

// getting branch books

const initialBooksState = {
    books: null,
    error: null,
    loading: false
}

const getBranchBooksStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const getBranchBooksSuccess = (state, action) => updateObject(state, {
    books: action.books,
    error: null,
    loading: false
})

const getBranchBooksFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const branchBooksReducer = (state = initialBooksState, action) => {
    switch (action.type) {
        case actionTypes.GET_BRANCH_BOOKS_STARTED: return getBranchBooksStarted(state, action);
        case actionTypes.GET_BRANCH_BOOKS_SUCCESS: return getBranchBooksSuccess(state, action);
        case actionTypes.EDIT_BOOK_COPIES_FAILURE: return getBranchBooksFailure(state, action);
        default: return state;
    }
}

//getting branch copies

const initialCopiesState = {
    copies: null,
    error: null,
    loading: false
}

const getCopiesStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const getCopiesSuccess = (state, action) => updateObject(state, {
    copies: action.copies,
    error: null,
    loading: false
})

const getCopiesFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const copiesReducer = (state = initialCopiesState, action) => {
    switch (action.type) {
        case actionTypes.GET_COPIES_STARTED: return getCopiesStarted(state, action);
        case actionTypes.GET_COPIES_SUCCESS: return getCopiesSuccess(state, action);
        case actionTypes.GET_COPIES_FAILURE: return getCopiesFailure(state, action);
        default: return state;
    }
}

//editing book copies
const initialStateUpdate = {
    copies: null,
    error: null,
    loading: false
}

const editBookCopiesStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const editBookCopiesSuccess = (state, action) => updateObject(state, {
    copies: action.copies,
    error: null,
    loading: false
})

const editBookCopiesFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const editBookCopiesReducer = (state = initialStateUpdate, action) => {
    switch (action.type) {
        case actionTypes.EDIT_BOOK_COPIES_STARTED: return editBookCopiesStarted(state, action);
        case actionTypes.EDIT_BOOK_COPIES_SUCCESS: return editBookCopiesSuccess(state, action);
        case actionTypes.EDIT_BOOK_COPIES_FAILURE: return editBookCopiesFailure(state, action);
        default: return state;
    }
}

export {
    editBookCopiesReducer,
    copiesReducer,
    branchBooksReducer
}
