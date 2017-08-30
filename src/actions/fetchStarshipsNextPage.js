import SWAPI from '../api/SWAPI';
import { FETCH_STARSHIPS_NEXT_PAGE } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        const currentState = getState();

        if (!canFetchNextPage(currentState)) {
            return Promise.resolve();
        }

        const fetchNextPage = SWAPI.getNextPage.bind(SWAPI, currentState.starships.next);

        return fetchingManager(fetchNextPage)(dispatch)
            .then(data => dispatch(receivedNextPage(data)));
    }
}

function receivedNextPage({results, next, count}) {
    return { type: FETCH_STARSHIPS_NEXT_PAGE, payload: {results, next, count} };
}

function canFetchNextPage({starships}) {
    return starships.next !== null;
}