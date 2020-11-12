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

const addFormColumns = [
    { field: 'publisherName', label: 'Publisher Name', type: 'text' },
    { field: 'publisherAddress', label: 'Publisher Address', type: 'text' }
]

const updateFormColumns = [
    { field: 'publisherId', label: 'Publisher Id', type: 'text' },
    { field: 'publisherName', label: 'Publisher Name', type: 'text' },
    { field: 'publisherAddress', label: 'Publisher Address', type: 'text' }
]

const deleteFormColumns = [
    { field: 'publisherId', label: 'Publisher Id', type: 'text' }
]

const Publisher = (props) => {
    const classes = useStyles(props);
    const publishers = useSelector((state) => state.publishers.publishers);
    const loading = useSelector((state) => state.publishers.loading);
    const dispatch = useDispatch();

    const getPublishers = () => dispatch(publisherActions.getPublishers());
    const addPublisher = (publisher) => publisherActions.addPublisher(publisher);
    const updatePublisher = (publisher) => publisherActions.updatePublisher(publisher);
    const deletePublisher = (publisher) => publisherActions.deletePublisher(publisher);

    useEffect(() => {
        getPublishers();
    }, [])

    return (
        <div className={classes.root}>
            <InputModal
                action={addPublisher}
                columns={addFormColumns}
                details='Enter details for the new publisher you would like to add.'
                title='New Publisher'
                refresh={getPublishers}
            />
            <InputModal
                action={updatePublisher}
                columns={updateFormColumns}
                details='Edit details for the publisher you would like to update.'
                title='Update Publisher'
                refresh={getPublishers}
            />
            <InputModal
                action={deletePublisher}
                columns={deleteFormColumns}
                details='Enter the id of the publisher you would like to delete'
                title='Delete Publisher'
                refresh={getPublishers}
            />
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
