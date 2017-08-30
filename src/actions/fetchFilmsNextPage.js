import SWAPI from '../api/SWAPI';
import { FETCH_FILMS_NEXT_PAGE } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return (dispatch, getState) => {

        const currentState = getState();

        if (!canFetchNextPage(currentState)) {
            return Promise.resolve();
        }

        dispatch(startFetching());

        return SWAPI
            .getNextPage(currentState.films.next)
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedNextPage(data)));
    }
}

function receivedNextPage({results, next, count}) {
    return { type: FETCH_FILMS_NEXT_PAGE, payload: {results, next, count} };
}

function canFetchNextPage({films}) {
    return films.next !== null;
}