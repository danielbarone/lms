import * as actionTypes from './actionTypes';
import admin from '../api';
import {borrower}  from '../api';



/* READ */
const getBBooksStarted = (loading) => ({
  type: actionTypes.GET_BBOOKS_STARTED,
  loading,
});

const getBBooksSuccess = (books, branchId) => ({
  type: actionTypes.GET_BBOOKS_SUCCESS,
  books,
  branchId
});

const getBBooksFailure = (error) => ({
  type: actionTypes.GET_BBOOKS_FAILURE,
  error,
});

const parseBookData = (books, branchId) => books.map(
  (b) => ({
    id: b.bookId,
    title: b.title || '--',
    authors: b.authors,
    genres: b.genres,
    publisher: b.publisher,
    bookId: b.bookId,
    branchId: parseInt(branchId),
  }),
);

const parseBookData2 = (books) => books.map(
  (b) => ({
    id: b.bookId,
    title: b.title || '--',
    authors: b.authors,
    genres: b.genres,
    publisher: b.publisher,
    bookId: b.bookId,
  }),
);


const getBookCopiesStarted = (loading) => ({
  type: actionTypes.GET_BOOKCOPIES_STARTED,
  loading,
});

const getBookCopiesSuccess = (bookCopies) => ({
  type: actionTypes.GET_BOOKCOPIES_SUCCESS,
  bookCopies,
});

const getBookCopiesFailure = (error) => ({
  type: actionTypes.GET_BOOKCOPIES_FAILURE,
  error,
});

const parseBookCopiesData = (bookCopies) => bookCopies.map(
  (b) => ({
    
    branchId: b.id.branchId,
    bookId: b.id.bookId,
    numOfCopies: b.numOfCopies,
    id: ""+b.id.branchId+b.id.bookId,
  }),
);

const getBooks = () => (dispatch) => {
  dispatch(getBBooksStarted(true));

  borrower.books().getAll()
    .then((response) => {
      const books = parseBookData2(response.data);
      dispatch(getBBooksSuccess(books));
     // console.log(response.data);
    })
    .catch((e) => dispatch(getBBooksFailure(e)));
};

const getBooksByBranchId = (branchId) => (dispatch) => {
  dispatch(getBBooksStarted(true));
  borrower.borrower().getBranchBooks(branchId)
    .then((response) => {
      const books = parseBookData(response.data, branchId);
      dispatch(getBBooksSuccess(books, branchId));
      // console.log("Branch Books");
      // console.log(books);
      // console.log(response.data);
      //getBookCopiesByBranchId(branchId);
    })
    .catch((e) => dispatch(getBBooksFailure(e)));
};

const getBookCopiesByBranchId = (branchId) => (dispatch) => {
  dispatch(getBookCopiesStarted(true));
  borrower.borrower().getBookCopiesByBranchId(branchId)
    .then((response) => {
      const bookCopies = parseBookCopiesData(response.data);
    
      dispatch(getBookCopiesSuccess(bookCopies));
      // console.log("Book Copies");
      // console.log(bookCopies);
      // console.log(response.data);
    })
    .catch((e) => dispatch(getBookCopiesFailure(e)));
};

const getBothByBranchId=(branchId)=> (dispatch) => {
  dispatch(getBookCopiesByBranchId(branchId));
  dispatch(getBooksByBranchId(branchId));

}






export {
  // addBook,
  // deleteBook,
  // updateBook,
  getBooks,
  getBooksByBranchId,
  getBookCopiesByBranchId,
  getBothByBranchId,
};
