import axios from 'axios';

export default {
  branches: () => ({
    getAll: () => axios.get(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getAllBranches`),
  }),
};
