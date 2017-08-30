import SWAPI from '../api/SWAPI';
import { FETCH_PEOPLE } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchPeople(getState())) {
            return Promise.resolve();
        }

        return fetchingManager(SWAPI.getPeople)(dispatch)
            .then(data => dispatch(receivedPeople(data)));
    }
}

function receivedPeople(people) {
    return { type: FETCH_PEOPLE, payload: people };
}

function shouldFetchPeople({people}) {
    return people.results.length === 0;
}