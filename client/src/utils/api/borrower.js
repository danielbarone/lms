import axios from 'axios';

export default {
  branches: () => ({
    getAll: () => axios.get(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getAllBranches`),
  }),
  borrower: () => ({
    getByCardNo: (cardNo) => axios.post(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getBorrowerByCardNo`,
    {
        
       
            "cardNo": cardNo
              
      
    }),
  }),
};