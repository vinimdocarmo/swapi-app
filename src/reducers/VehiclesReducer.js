import {FETCH_VEHICLES, FETCH_VEHICLES_NEXT_PAGE} from '../actions/actions';

const INITIAL_STATE = {results: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_VEHICLES:
            return {...state, ...action.payload};
        case FETCH_VEHICLES_NEXT_PAGE:
            return Object.assign({}, state, {...action.payload, results: state.results.concat(action.payload.results)});
        default:
            return state;
    }
}