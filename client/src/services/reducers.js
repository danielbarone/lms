/* User Session */
export { default as session } from './Session/reducers';
// export { default as branches } from './Branches/reducers';
// export { default as genres } from './Genres/reducers';
export { default as borrower } from './Borrower/reducers';
export { default as loans } from './Loans/reducers';

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
