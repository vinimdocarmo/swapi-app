import SWAPI from '../api/SWAPI';
import { FETCH_STARSHIPS } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchStarships(getState())) {
            return Promise.resolve();
        }

        return fetchingManager(SWAPI.getStarships)(dispatch)
            .then(data => dispatch(receivedStarships(data)));
    }
}

function receivedStarships(starships) {
    return { type: FETCH_STARSHIPS, payload: starships };
}

function shouldFetchStarships({starships}) {
    return starships.results.length === 0;
}