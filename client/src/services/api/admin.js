import axios from 'axios';

const adminBaseUrl = process.env.REACT_APP_ADMIN_SERVICE_URL;

const deleteConfig = (data, url) => ({
  method: 'delete',
  url,
  headers: {
    'Content-Type': 'application/json',
  },
  data,
});

const admin = {
  branches: () => ({
    create: (branch) => axios.post(`${adminBaseUrl}/addBranchRE`, branch),
    update: (branch) => axios.post(`${adminBaseUrl}/updateBranchRE`, branch),
    delete: (branch) => axios(deleteConfig(branch, `${adminBaseUrl}/deleteBranchRE`)),
    getAll: () => axios.get(`${adminBaseUrl}/getAllBranches`),
  }),
  genres: () => ({
    create: (genre) => axios.post(`${adminBaseUrl}/addGenreRE`, genre),
    update: (genre) => axios.post(`${adminBaseUrl}/updateGenreRE`, genre),
    delete: (genre) => axios(deleteConfig(genre, `${adminBaseUrl}/deleteGenreRE`)),
    getAll: () => axios.get(`${adminBaseUrl}/getAllGenres`),
  }),
};

export default admin;
