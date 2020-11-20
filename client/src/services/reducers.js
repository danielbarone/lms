/* User Session */
export { default as session } from './Session/reducers';
// export { default as branches } from './Branches/reducers';
// export { default as genres } from './Genres/reducers';

export { booksReducer as books } from './Books/reducers';

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

/* Borrower Reducers*/
export { default as borrower } from './Borrower/reducers';
export { default as loans } from './Loans/reducers';
export { booksReducer as branchBooks } from './BranchBookCopies/reducers';
export { bookCopiesReducer as branchBooksCopies } from './BranchBookCopies/reducers';
//Admin Loans Reducers
export { loansReducer as loans } from './Loans/reducers';

//Admin Publisher Reducers
export { publishersReducer as publishers } from './Publishers/reducers';
export { createPublisherReducer as publisher } from './Publishers/reducers';
export { updatePublisherReducer as updatedPublisher } from './Publishers/reducers';
export { deletePublisherReducer as deletedPublisher } from './Publishers/reducers';

//Admin Borrower Reducers
export { borrowersReducer as borrowers } from './Borrowers/reducers';
export { createBorrowerReducer as borrower } from './Borrowers/reducers';
export { updateBorrowerReducer as updatedBorrower } from './Borrowers/reducers';
export { deleteBorrowerReducer as deletedBorrower } from './Borrowers/reducers';
