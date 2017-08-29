import {FETCH_VEHICLES} from '../actions/actions';

const INITIAL_STATE = {results: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_VEHICLES:
            return {...state, ...action.payload};
        default:
            return state;
    }
}