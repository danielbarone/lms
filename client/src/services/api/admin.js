import axios from 'axios';

const adminBaseUrl = process.env.REACT_APP_ADMIN_SERVICE_URL;

const admin = {
  branches: () => ({
    create: (branch) => axios.post(`${adminBaseUrl}/addBranch`, branch),
    update: (branch) => axios.post(`${adminBaseUrl}/updateBranchDetails`, branch),
    getAll: () => axios.get(`${adminBaseUrl}/getAllBranches`),
  }),
  genres: () => ({
    create: (genre) => axios.post(`${adminBaseUrl}/addGenreRE`, genre),
    update: (genre) => axios.post(`${adminBaseUrl}/updateGenreRE`, genre),
    getAll: () => axios.get(`${adminBaseUrl}/getAllGenres`),
  }),
  publishers: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllPublishers`),
    create: (publisher) => axios.post(`${adminBaseUrl}/addPublisher`, publisher),
    update: (publisher) => axios.post(`${adminBaseUrl}/updatePublisher`, publisher),
    delete: (publisher) => axios.post(`${adminBaseUrl}/deletePublisher`, publisher)
  }),
  loans: () => ({
    getAll: () => axios.get(`${adminBaseUrl}/getAllBookLoans`)
  })
};

export default admin;
