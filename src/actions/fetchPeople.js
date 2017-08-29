import SWAPI from '../api/SWAPI';
import { FETCH_PEOPLE } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return dispatch => {
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