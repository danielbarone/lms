// import axios from 'axios';

// export default {
//   branches: () => ({
//     getAll: () => axios.get(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getAllBranches`),
//   }),
//   getBookCopiesByBranchId: (branchId) => axios.post(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getBookCopiesByBranchId`,
//   {
//           "branchId": branchId
//   }),
//   getBranchBooks: (branchId) => axios.post(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getBranchBooks`,
//   {
//           "branchId": branchId
//   }),
//   borrower: () => ({
//     getByCardNo: (cardNo) => axios.post(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getBorrowerByCardNo`,
//     {

//             "cardNo": cardNo
//     }),
//     getLoansByCardNo: (cardNo) => axios.post(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getBookLoansByCardNo`,
//     {
//             "cardNo": cardNo
//     }),
//     getBookCopiesByBranchId: (branchId) => axios.post(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getBookCopiesByBranchId`,
//     {
//             "branchId": branchId
//     }),
//     getBranchBooks: (branchId) => axios.post(`${process.env.REACT_APP_ADMIN_SERVICE_URL}/getBranchBooks`,
//     {
//             "branchId": branchId
//     }),
//   }),
// };