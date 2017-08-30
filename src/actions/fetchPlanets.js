import SWAPI from '../api/SWAPI';
import { FETCH_PLANETS } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchPlanets(getState())) {
            return Promise.resolve();
        }

        return fetchingManager(SWAPI.getPlanets)(dispatch)
            .then(data => dispatch(receivedPlanets(data)));
    }
}

function receivedPlanets({results, next, count}) {
    return { type: FETCH_PLANETS, payload: {results, next, count} };
}

function shouldFetchPlanets({planets}) {
    return planets.results.length === 0;
}