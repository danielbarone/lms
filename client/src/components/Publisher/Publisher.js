import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './publisherStyles';
import { EntityTable, InputModal } from '..';
import { publisherActions } from '../../services/actions';

const columns = [
    { field: 'id', headerName: 'ID', width: 75 },
    { field: 'name', headerName: 'Publisher Name', width: 250 },
    { field: 'address', headerName: 'Address', width: 250 }
]

const Publisher = (props) => {
    const classes = useStyles(props);
    const publishers = useSelector((state) => state.publishers.publishers);
    const loading = useSelector((state) => state.publishers.loading);
    const dispatch = useDispatch();

    const getPublishers = () => dispatch(publisherActions.getPublishers());

    useEffect(() => {
        getPublishers();
    }, [])

    return (
        <div className={classes.root}>
            <EntityTable
                cols={columns}
                icon='library'
                loading={loading}
                rows={publishers}
            />
        </div>
    )
}

export default Publisher;
