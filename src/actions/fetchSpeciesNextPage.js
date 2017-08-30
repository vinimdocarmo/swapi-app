import SWAPI from '../api/SWAPI';
import { FETCH_SPECIES_NEXT_PAGE } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        const currentState = getState();

        if (!canFetchNextPage(currentState)) {
            return Promise.resolve();
        }

        const fetchNextPagePromise = SWAPI.getNextPage.bind(SWAPI, currentState.species.next);

        return fetchingManager(fetchNextPagePromise)(dispatch)
            .then(data => dispatch(receivedNextPage(data)));
    }
}

function receivedNextPage({results, next, count}) {
    return { type: FETCH_SPECIES_NEXT_PAGE, payload: {results, next, count} };
}

function canFetchNextPage({species}) {
    return species.next !== null;
}