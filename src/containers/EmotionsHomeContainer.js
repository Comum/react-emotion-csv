import { connect } from 'react-redux';

import { getEmotionsResults, addEmotionToTransaction, removeEmotionFromTransation } from '../actions';
import EmotionsHome from '../components/EmotionsHome';

const stateToProps = state => {
    return {
        emotions: state.emotions
    };
}

const dispatchToProps = dispatch => {
    return {
        onSubmitEmotionsForm: (...args) => {
            dispatch(getEmotionsResults(...args))
        },
        onEmotionChanged: (...args) => {
            dispatch(addEmotionToTransaction(...args))
        },
        onRemoveEmotion: (...args) => {
            dispatch(removeEmotionFromTransation(...args))
        },
    };
}

const EmotionsHomeContainer = connect(stateToProps, dispatchToProps)(EmotionsHome);

export default EmotionsHomeContainer;