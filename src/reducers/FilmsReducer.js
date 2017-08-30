import {FETCH_FILMS, FETCH_FILMS_NEXT_PAGE} from '../actions/actions';

const INITIAL_STATE = {results: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FILMS:
            return {...state, ...action.payload};
        case FETCH_FILMS_NEXT_PAGE:
            return Object.assign({}, state, {...action.payload, results: state.results.concat(action.payload.results)});
        default:
            return state;
    }
}