import SWAPI from '../api/SWAPI';
import {FETCH_VEHICLES_NEXT_PAGE} from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        const currentState = getState();

        if (!canFetchNextPage(currentState)) {
            return Promise.resolve();
        }

        const fetchNextPage = SWAPI.getNextPage.bind(SWAPI, currentState.vehicles.next);

        return fetchingManager(fetchNextPage)(dispatch)
            .then(data => dispatch(receivedNextPage(data)));
    }
}

function receivedNextPage({results, next, count}) {
    return {type: FETCH_VEHICLES_NEXT_PAGE, payload: {results, next, count}};
}

function canFetchNextPage({vehicles}) {
    return vehicles.next !== null;
}