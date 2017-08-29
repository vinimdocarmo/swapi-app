import {START_FETCHING, END_FETCHING} from '../actions/actions';

export default (state = false, action) => {
    switch (action.type) {
        case START_FETCHING:
        case END_FETCHING:
            return action.payload;
        default:
            return state;
    }
}