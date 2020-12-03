import * as actionTypes from './actionTypes';
import admin from '../api';

//reading publishers
const getPublishersStarted = (loading) => ({
    type: actionTypes.GET_PUBLISHERS_STARTED,
    loading
})

const getPublishersSuccess = (publishers) => ({
    type: actionTypes.GET_PUBLISHERS_SUCCESS,
    publishers
})

const getPublishersFailure = (error) => ({
    type: actionTypes.GET_PUBLISHERS_FAILURE,
    error
})

const parsePublisherData = (publishers) => publishers.map(
    (p) => ({
        id: p.publisherId,
        name: p.publisherName,
        address: p.publisherAddress
    })
)

const getPublishers = () => (dispatch) => {
    dispatch(getPublishersStarted(true));

    admin.publishers().getAll().then((res) => {
        const publishers = parsePublisherData(res.data);
        dispatch(getPublishersSuccess(publishers));
    }).catch((e) => dispatch(getPublishersFailure(e)));
}

//adding publisher
const addPublisherStarted = (loading) => ({
    type: actionTypes.ADD_PUBLISHER_STARTED,
    loading
})

const addPublisherSuccess = (publisher) => ({
    type: actionTypes.ADD_PUBLISHER_SUCCESS,
    publisher
})

const addPublisherFailure = (error) => ({
    type: actionTypes.ADD_PUBLISHER_FAILURE,
    error
})

const addPublisher = (publisher) => (dispatch) => {
    dispatch(addPublisherStarted(true));

    return admin.publishers().create(publisher).then((res) => {
        dispatch(addPublisherSuccess(publisher));
        return res;
    }).catch((err) => dispatch(addPublisherFailure(err)))
}

//updating publisher
const updatePublisherStarted = (loading) => ({
    type: actionTypes.UPDATE_PUBLISHER_STARTED,
    loading
})

const updatePublisherSuccess = (publisher) => ({
    type: actionTypes.UPDATE_PUBLISHER_STARTED,
    publisher
})

const updatePublisherFailure = (error) => ({
    type: actionTypes.UPDATE_PUBLISHER_FAILURE,
    error
})

const updatePublisher = (publisher) => (dispatch) => {
    dispatch(updatePublisherStarted(true));

    return admin.publishers().update(publisher).then((res) => {
        dispatch(updatePublisherSuccess(publisher));
        return res;
    }).catch((err) => dispatch(updatePublisherFailure(err)));
}

//deleting a publisher
const deletePublisherStarted = (loading) => ({
    type: actionTypes.DELETE_PUBLISHER_STARTED,
    loading
})

const deletePublisherSuccess = (publisher) => ({
    type: actionTypes.DELETE_PUBLISHER_SUCCESS,
    publisher
})

const deletePublisherFailure = (error) => ({
    type: actionTypes.DELETE_PUBLISHER_FAILURE,
    error
})

const deletePublisher = (publisher) => (dispatch) => {
    dispatch(deletePublisherStarted(true));

    return admin.publishers().delete(publisher).then((res) => {
        dispatch(deletePublisherSuccess(publisher));
        return res;
    }).catch((err) => dispatch(deletePublisherFailure(err)));
}

export {
    getPublishers,
    addPublisher,
    updatePublisher,
    deletePublisher
}
