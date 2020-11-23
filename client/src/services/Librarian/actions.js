import * as actionTypes from './actionTypes';

import librarian from '../api/librarian';

//reading branch books
const getBranchBooksStarted = (loading) => ({
    type: actionTypes.GET_BRANCH_BOOKS_STARTED,
    loading
})

const getBranchBooksSuccess = (books) => ({
    type: actionTypes.GET_BRANCH_BOOKS_SUCCESS,
    books
})

const getBranchBooksFailure = (error) => ({
    type: actionTypes.GET_BRANCH_BOOKS_FAILURE,
    error
})

const parseBookData = (books) => books.map(
    (b, index) => ({
        id: (index + 1),
        bookId: b.bookId,
        title: b.title
    })
)

const getBranchBooks = (branchId) => (dispatch) => {
    dispatch(getBranchBooksStarted(true));

    librarian.service().getBooks(branchId).then((res) => {
        const books = parseBookData(res.data);
        dispatch(getBranchBooksSuccess(books));
        return res;
    }).catch((e) => dispatch(getBranchBooksFailure(e)));
}

//readingBranchCopies
const getBranchCopiesStarted = (loading) => ({
    type: actionTypes.GET_COPIES_STARTED,
    loading
})

const getBranchCopiesSuccess = (copies) => ({
    type: actionTypes.GET_COPIES_SUCCESS,
    copies
})

const getBranchCopiesFailure = (error) => ({
    type: actionTypes.GET_COPIES_FAILURE,
    error
})

const parseCopiesData = (copies) => copies.map(
    (c) => ({
        bookId: c.id.bookId,
        branchId: c.id.branchId,
        numOfCopies: c.numOfCopies
    })
)

const getBranchCopies = (branchId) => (dispatch) => {
    dispatch(getBranchCopiesStarted(true));

    librarian.service().getCopies(branchId).then((res) => {
        const copies = parseCopiesData(res.data);
        dispatch(getBranchCopiesSuccess(copies));
        return res;
    }).catch((e) => dispatch(getBranchCopiesFailure(e)));
}

//edit branch Copies
const editBookCopiesStarted = (loading) => ({
    type: actionTypes.EDIT_BOOK_COPIES_STARTED,
    loading
})

const editBookCopiesSuccess = (copies) => ({
    type: actionTypes.EDIT_BOOK_COPIES_SUCCESS,
    copies
})

const editBookCopiesFailure = (error) => ({
    type: actionTypes.EDIT_BOOK_COPIES_FAILURE,
    error
})


const updateBookCopies = (copies) => (dispatch) => {
    dispatch(editBookCopiesStarted(true))

    librarian.service().editBookCopies(copies).then((res) => {
        dispatch(editBookCopiesSuccess(copies));
        return res;
    }).catch((e) => dispatch(editBookCopiesFailure(e)));
}

export {
    getBranchBooks,
    getBranchCopies,
    updateBookCopies
}
