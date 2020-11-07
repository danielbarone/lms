import axios from 'axios';

const adminBaseUrl = process.env.REACT_APP_ADMIN_SERVICE_URL;

export default {
  branches: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllBranches`),
  }),
  genres: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllGenres`),
  }),
};
