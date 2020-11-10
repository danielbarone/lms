/* User Session */
export { default as session } from './Session/reducers';
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
