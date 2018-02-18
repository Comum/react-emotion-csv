import * as d3 from 'd3';

import emotionsActions from './emotionsActions';

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
    return new Promise((resolve) => {
        d3.csv('../data/transactions.csv', function(data) {
            resolve(data);
        });
    });
}

const requestedEmotionsResults = createAction(emotionsActions.EMOTIONS_RESULTS_REQUESTED);
const receivedEmotionsResults = createAction(emotionsActions.EMOTIONS_RESULTS_RECEIVED);
export const getEmotionsResults = () => {
    return dispatch => {
        dispatch(requestedEmotionsResults());
        return fetch(`https://api.github.com/users/Comum`)
            .then(response => response.json())
            .then(json => dispatch(receivedEmotionsResults(json)))
    }
}

const requestedEmotionsList = createAction(emotionsActions.EMOTIONS_LIST_REQUESTED);
const receivedEmotionsList = createAction(emotionsActions.EMOTIONS_LIST_RECEIVED);
export const getEmotionsList = () => {
    return dispatch => {
        dispatch(requestedEmotionsList());

        getEmotionsListFromCsv()
            .then(value => dispatch(receivedEmotionsList(value)));
    }
}