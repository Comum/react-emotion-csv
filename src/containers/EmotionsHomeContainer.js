import { connect } from 'react-redux';

import { getEmotionsResults } from '../actions';
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
        }
    };
}

const EmotionsHomeContainer = connect(stateToProps, dispatchToProps)(EmotionsHome);

export default EmotionsHomeContainer;