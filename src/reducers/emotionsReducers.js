import actions from '../actions';
import emotions from '../actions/emotionsActions';

const initialState = {
    emotionsListRequested: false,
    emotionsResultsRequested: false,
    emotionsResults: []
}

function editEmotionsResults(id, emotion, transactions) {
    transactions.forEach((transaction) => {
        if (transaction.id === id) {
            transaction.emotion = emotion;
        } else {
            if (transaction.emotion === '') {
                transaction.emotion = '';
            }
        }
    });

    return transactions;
}

function reduceEmotionsListRequested(state) {
    return {
        ...state,
        emotionsListRequested: true
    }
}

function reduceEmotionsListReceived(state, data) {
    return {
        emotionsListRequested: false,
        emotionsResultsRequested: false,
        emotionsResults: data
    }
}

function reduceEmotionsResultsRequested(state) {
    return {
        ...state,
        emotionsResultsRequested: true
    }
}

function reduceEmotionsResultsReceived(state, data) {
    return {
        emotionsListRequested: false,
        emotionsResultsRequested: false,
        emotionsResults: data
    }
}

function reduceAddEmotions(state, data) {
    let editedEmotionsResults = editEmotionsResults(data.id, data.emotion, state.emotionsResults)
        
    return {
        ...state,
        emotionsResults: editedEmotionsResults
    };  
}

export default (state, action) => {
    if (typeof state === 'undefined') {
        state = initialState;
    }

    switch (action.type) {
        case emotions.EMOTIONS_LIST_REQUESTED:
            return reduceEmotionsListRequested(state);
        case emotions.EMOTIONS_LIST_RECEIVED:
            return reduceEmotionsListReceived(state, action.data);
        case emotions.EMOTIONS_RESULTS_REQUESTED:
            return reduceEmotionsResultsRequested(state);
        case emotions.EMOTIONS_RESULTS_RECEIVED:
            return reduceEmotionsResultsReceived(state, action.data);
        case emotions.ADD_EMOTION:
            return reduceAddEmotions(state, action.data);
        default:
            return state;
    }
}