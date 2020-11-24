import axios from 'axios';

//const borrowerBaseUrl = process.env.REACT_APP_ADMIN_SERVICE_URL;
const borrowerBaseUrl = process.env.REACT_APP_BORROWER_SERVICE_URL;

const borrower= {
  branches: () => ({
    getAll: () => axios.get(`${borrowerBaseUrl}/getAllBranches`),
  }),
  getBookCopiesByBranchId: (branchId) => axios.post(`${borrowerBaseUrl}/getBookCopiesByBranchId`,
  {
          "branchId": branchId
  }),
  getBranchBooks: (branchId) => axios.post(`${borrowerBaseUrl}/getBranchBooks`,
  {
          "branchId": branchId
  }),
  borrower: () => ({
    getByCardNo: (cardNo) => axios.post(`${borrowerBaseUrl}/getBorrowerByCardNo`,
    {

            "cardNo": cardNo
    }),
    getLoansByCardNo: (cardNo) => axios.post(`${borrowerBaseUrl}/getBookLoansByCardNo`,
    {
            "cardNo": cardNo
    }),
    getBookCopiesByBranchId: (branchId) => axios.post(`${borrowerBaseUrl}/getBookCopiesByBranchId`,
    {
            "branchId": branchId
    }),
    getBranchBooks: (branchId) => axios.post(`${borrowerBaseUrl}/getBranchBooks`,
    {
            "branchId": branchId
    }),
    checkOutBook: (bookId, branchId, cardNo, dateOut, dueDate) => axios.post(`${borrowerBaseUrl}/checkOutBook`,
    {
            "id":{
                "bookId": bookId,
            "branchId": branchId,
            "cardNo": cardNo,
            },
            
            "dateOut": dateOut,
            "dueDate": dueDate,
            //"dateIn": dateIn,
    }),
    returnBook: (bookId, branchId, cardNo, dateOut, dueDate, dateIn) => axios.post(`${borrowerBaseUrl}/returnBook`,
    {
        "id":{
            "bookId": bookId,
            "branchId": branchId,
            "cardNo": cardNo,
            },
            "dateOut": dateOut,
            "dueDate": dueDate,
            "dateIn": dateIn,
    }),
  }),
};

export default borrower;