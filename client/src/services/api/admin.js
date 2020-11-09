import axios from 'axios';

const adminBaseUrl = "https://a178963a462c.ngrok.io";

const admin = {
  branches: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllBranches`),
  }),
  genres: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllGenres`),
  }),
};

export default admin;
