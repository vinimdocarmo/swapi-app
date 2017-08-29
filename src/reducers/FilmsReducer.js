import {FETCH_FILMS} from '../actions/actions';

const INITIAL_STATE = {results: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FILMS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}