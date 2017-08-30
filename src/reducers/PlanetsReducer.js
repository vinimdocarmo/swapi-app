import {FETCH_PLANETS, REMOVE_PLANET, FETCH_PLANETS_NEXT_PAGE, CREATE_PLANET, EDIT_PLANET} from '../actions/actions';

const INITIAL_STATE = {results: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PLANETS:
            return {...state, ...action.payload};
        case REMOVE_PLANET:
            return Object.assign({}, state, {
                results: state.results.filter((planet) => planet.name !== action.payload.name)
            });
        case FETCH_PLANETS_NEXT_PAGE:
            return Object.assign({}, state, {...action.payload, results: state.results.concat(action.payload.results)});
        case CREATE_PLANET:
            return Object.assign({}, state, {results: [action.payload].concat(state.results)});
        case EDIT_PLANET:
            return Object.assign({}, state, {
                results: state.results.map(planet => {
                    if (planet.name === action.payload.oldName) {
                        return Object.assign({}, planet, action.payload.newPlanet);
                    }
                    return planet;
                })
            });
        default:
            return state;
    }
}