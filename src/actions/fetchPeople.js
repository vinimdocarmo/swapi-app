import SWAPI from '../api/SWAPI';
import { FETCH_PEOPLE } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchPeople(getState())) {
            return Promise.resolve();
        }

        dispatch(startFetching());

        return SWAPI
            .getPeople()
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedPeople(data)));
    }
}

function receivedPeople(people) {
    return { type: FETCH_PEOPLE, payload: people };
}

function shouldFetchPeople({people}) {
    return people.results.length === 0;
}