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

//adding publisher
const initialStateCreate = {
    error: null,
    loading: false
}

const addPublisherStarted = (state, action) => updateObject(state, {
    error: null,
    loading: false
})

const addPublisherSuccess = (state, action) => updateObject(state, {
    error: null,
    loading: false
})

const addPublisherFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const createPublisherReducer = (state = initialStateCreate, action) => {
    switch (action.type) {
        case actionTypes.ADD_PUBLISHER_STARTED: return addPublisherStarted(state, action);
        case actionTypes.ADD_PUBLISHER_SUCCESS: return addPublisherSuccess(state, action);
        case actionTypes.ADD_PUBLISHER_FAILURE: return addPublisherFailure(state, action);
        default: return state;
    }
}

//updating publisher
const initialStateUpdate = {
    publisher: null,
    error: null,
    loading: false
}

const updatePublisherStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const updatePublisherSuccess = (state, action) => updateObject(state, {
    publisher: action.publisher,
    error: null,
    loading: false
})

const updatePublisherFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const updatePublisherReducer = (state = initialStateUpdate, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PUBLISHER_STARTED: return updatePublisherStarted(state, action);
        case actionTypes.UPDATE_PUBLISHER_SUCCESS: return updatePublisherSuccess(state, action);
        case actionTypes.UPDATE_PUBLISHER_FAILURE: return updatePublisherFailure(state, action);
        default: return state;
    }
}

//deleteing publisher
const initialStateDelete = {
    publisher: null,
    error: null,
    loading: false
}

const deletePublisherStarted = (state, action) => updateObject(state, {
    error: null,
    loading: true
})

const deletePublisherSuccess = (state, action) => updateObject(state, {
    publisher: action.publisher,
    error: null,
    loading: false
})

const deletePublisherFailure = (state, action) => updateObject(state, {
    error: action.error,
    loading: false
})

const deletePublisherReducer = (state = initialStateDelete, action) => {
    switch (action.type) {
        case actionTypes.DELETE_PUBLISHER_STARTED: return deletePublisherStarted(state, action);
        case actionTypes.DELETE_PUBLISHER_SUCCESS: return deletePublisherSuccess(state, action);
        case actionTypes.DELETE_PUBLISHER_FAILURE: return deletePublisherFailure(state, action);
        default: return state;
    }
}

export {
    publishersReducer,
    createPublisherReducer,
    updatePublisherReducer,
    deletePublisherReducer
}
