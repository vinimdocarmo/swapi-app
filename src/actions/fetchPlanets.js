import SWAPI from '../api/SWAPI';
import { FETCH_PLANETS } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchPlanets(getState())) {
            return Promise.resolve();
        }

        dispatch(startFetching());

        return SWAPI
            .getPlanets()
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedPlanets(data)));
    }
}

function receivedPlanets({results, next, count}) {
    return { type: FETCH_PLANETS, payload: {results, next, count} };
}

function shouldFetchPlanets({planets}) {
    return planets.results.length === 0;
}