/* User Session */
export { default as session } from './Session/reducers';

/* Admin Book Reducers */
export { bookReducer as book } from './Books/reducers';
export { booksReducer as books } from './Books/reducers';

/* Admin Author Reducers */
export { authorsReducer as authors } from './Authors/reducers';

/* Admin Branch Reducers */
export { branchReducer as branch } from './Branches/reducers';
export { deletedBranchReducer as deletedBranch } from './Branches/reducers';
export { updatedBranchReducer as updatedBranch } from './Branches/reducers';
export { branchesReducer as branches } from './Branches/reducers';

/* Admin Genre Reducers */
export { deletedGenreReducer as deletedGenre } from './Genres/reducers';
export { genresReducer as genres } from './Genres/reducers';
export { genreReducer as genre } from './Genres/reducers';
export { updatedGenreReducer as updatedGenre } from './Genres/reducers';

//Admin Loans Reducers
export { loansReducer as loans } from './Loans/reducers';
export { overrideReducer as updatedLoan } from './Loans/reducers';

//Admin Publisher Reducers
export { publishersReducer as publishers } from './Publishers/reducers';
export { createPublisherReducer as publisher } from './Publishers/reducers';
export { updatePublisherReducer as updatedPublisher } from './Publishers/reducers';
export { deletePublisherReducer as deletedPublisher } from './Publishers/reducers';

// Admin Borrower Reducers
export { borrowersReducer as borrowers } from './Borrowers/reducers';
export { createBorrowerReducer as borrower } from './Borrowers/reducers';
export { updateBorrowerReducer as updatedBorrower } from './Borrowers/reducers';
export { deleteBorrowerReducer as deletedBorrower } from './Borrowers/reducers';

//Librarian Reducers
export { editBookCopiesReducer as updatedCopies } from './Librarian/reducers';
export { copiesReducer as copies } from './Librarian/reducers';
export { branchBooksReducer as branchBooks } from './Librarian/reducers';
