import axios from 'axios';

const adminBaseUrl = process.env.REACT_APP_ADMIN_SERVICE_URL;

const librarian = {
    service: () => ({
        getCopies: (branchId) => axios.post(`${adminBaseUrl}/getBookCopiesByBranchId`, { "branchId": branchId }),
        getBooks: (branchId) => axios.post(`${adminBaseUrl}/getBranchBooks`, { "branchId": branchId }),
        editBookCopies: (branchId, bookId, numOfCopies) => axios.post(`${adminBaseUrl}/addBookCopies`,
            {
                "id": {
                    "branchId": branchId,
                    "bookId": bookId
                },
                "numOfCopies": numOfCopies
            }
        )
    })
}

export default librarian;
