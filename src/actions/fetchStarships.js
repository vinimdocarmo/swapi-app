import SWAPI from '../api/SWAPI';
import { FETCH_STARSHIPS } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchStarships(getState())) {
            return Promise.resolve();
        }

        dispatch(startFetching());

        return SWAPI
            .getStarships()
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedStarships(data)));
    }
}

function receivedStarships(starships) {
    return { type: FETCH_STARSHIPS, payload: starships };
}

function shouldFetchStarships({starships}) {
    return starships.results.length === 0;
}