import { FETCH_PLANETS, REMOVE_PLANET } from '../actions/actions';

const INITIAL_STATE = { results: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PLANETS:
            return { ...state, ...action.payload };
        case REMOVE_PLANET:
            return Object.assign({}, state, {
                results: state.results.filter((planet) => planet.name !== action.payload.name)
            });
        default:
           return state;
    }
}