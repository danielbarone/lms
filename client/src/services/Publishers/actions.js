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

export {
    getPublishers
}
