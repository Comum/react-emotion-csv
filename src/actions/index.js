import emotionsActions from './emotionsActions';
import { mockAddEmotion, mockRemoveEmotion, getFilteredEmotionsListFromCsv, getAllTransactions } from '../server/mockServer';

function createAction(actionType) {
    return data => {
        let action = {type: actionType};
        if (typeof data !== 'undefined') {
            action.data = data;
        }
        return action;
    }
}

function getEmotionsListFromCsv() {
    return new Promise(resolve => {
        d3.csv('../data/transactions.csv', function(data) {
            resolve(data);
        });
    });
}

const requestedEmotionsResults = createAction(emotionsActions.EMOTIONS_RESULTS_REQUESTED);
const receivedEmotionsResults = createAction(emotionsActions.EMOTIONS_RESULTS_RECEIVED);
export const getEmotionsResults = (description, emotion) => {
    return dispatch => {
        dispatch(requestedEmotionsResults());

        getFilteredEmotionsListFromCsv(description, emotion)
            .then(value => dispatch(receivedEmotionsResults(value)));
    }
}

const requestedEmotionsList = createAction(emotionsActions.EMOTIONS_LIST_REQUESTED);
const receivedEmotionsList = createAction(emotionsActions.EMOTIONS_LIST_RECEIVED);
export const getEmotionsList = () => {
    return dispatch => {
        dispatch(requestedEmotionsList());

        getAllTransactions()
            .then(value => dispatch(receivedEmotionsList(value)));
    }
}

const addEmotion = createAction(emotionsActions.ADD_EMOTION);
export const addEmotionToTransaction = (id, emotion) => {
    return dispatch => {
        mockAddEmotion(id, emotion)
        .then(() => {
            dispatch(addEmotion({id: id, emotion: emotion})); 
        });
    }
}

const removeEmotion = createAction(emotionsActions.REMOVE_EMOTION);
export const removeEmotionFromTransation = id => {
    return dispatch => {
        mockRemoveEmotion(id)
        .then(() => {
            dispatch(removeEmotion(id)); 
        });
    }
}