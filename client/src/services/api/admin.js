import axios from 'axios';

const adminBaseUrl = process.env.REACT_APP_ADMIN_SERVICE_URL;

const admin = {
  branches: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllBranches`),
  }),
  genres: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllGenres`),
  }),
};

export default admin;
