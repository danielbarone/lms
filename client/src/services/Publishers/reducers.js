import * as actionTypes from './actionTypes';
import updateObject from '../utils';

//reading publishers

const initialState = {
    publishers: null,
    error: null,
    loading: false
}

const getPublishersStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const getPublishersSuccess = (state, action) => updateObject(state, {
    publishers: action.publishers,
    error: null,
    loading: false
})

const getPublisherFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const publishersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PUBLISHERS_STARTED: return getPublishersStarted(state, action);
        case actionTypes.GET_PUBLISHERS_SUCCESS: return getPublishersSuccess(state, action);
        case actionTypes.GET_PUBLISHERS_FAILURE: return getPublisherFailure(state, action);
        default: return state;
    }
}

export {
    publishersReducer
}
