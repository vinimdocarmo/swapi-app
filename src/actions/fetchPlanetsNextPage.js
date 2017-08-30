import SWAPI from '../api/SWAPI';
import { FETCH_PLANETS_NEXT_PAGE } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return (dispatch, getState) => {

        const currentState = getState();

        if (!canFetchNextPage(currentState)) {
            return Promise.resolve();
        }

        dispatch(startFetching());

        return SWAPI
            .getNextPage(currentState.planets.next)
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedNextPage(data)));
    }
}

function receivedNextPage({results, next, count}) {
    return { type: FETCH_PLANETS_NEXT_PAGE, payload: {results, next, count} };
}

function canFetchNextPage({planets}) {
    return planets.next !== null;
}