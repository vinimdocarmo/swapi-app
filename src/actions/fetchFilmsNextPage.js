import SWAPI from '../api/SWAPI';
import { FETCH_FILMS_NEXT_PAGE } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        const currentState = getState();

        if (!canFetchNextPage(currentState)) {
            return Promise.resolve();
        }

        const fetchNextPage = SWAPI.getNextPage.bind(SWAPI, currentState.films.next);

        return fetchingManager(fetchNextPage)(dispatch)
            .then(data => dispatch(receivedNextPage(data)));
    }
}

function receivedNextPage({results, next, count}) {
    return { type: FETCH_FILMS_NEXT_PAGE, payload: {results, next, count} };
}

function canFetchNextPage({films}) {
    return films.next !== null;
}