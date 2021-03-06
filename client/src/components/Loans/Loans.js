import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './loanStyles';
import { EntityTable, InputModal } from '..';
import { loanActions } from '../../services/actions';

import LoanModal from './LoanModal'

const columns = [
    { field: 'id', headerName: 'ID', width: 75 },
    { field: 'bookId', headerName: 'Book ID', width: 75 },
    { field: 'branchId', headerName: 'Branch ID', width: 75 },
    { field: 'cardNo', headerName: 'Card No', width: 75 },
    { field: 'dateOut', headerName: 'Date Out', width: 250 },
    { field: 'dueDate', headerName: 'Due Date', width: 250 },
    { field: 'dateIn', headerName: 'Date In', width: 250 },
]



const Loans = (props) => {
    const classes = useStyles(props);
    const loans = useSelector((state) => state.loans.loans);
    const loading = useSelector((state) => state.loans.loading);
    const dispatch = useDispatch();

    const getLoans = () => dispatch(loanActions.getLoans());

    const [refresher, setRefresher] = useState(0);

    useEffect(() => {
        getLoans();
    }, [refresher])

    return (
        <div className={classes.root}>
            <LoanModal refresh={refresher} setRefresher={setRefresher} />
            <EntityTable
                cols={columns}
                icon='library'
                loading={loading}
                rows={loans}
                refresh={getLoans}
            />
        </div>
    )
}

export default Loans;


