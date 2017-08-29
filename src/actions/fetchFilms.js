import SWAPI from '../api/SWAPI';
import { FETCH_FILMS } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return dispatch => {
        dispatch(startFetching());
        return SWAPI
            .getFilms()
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedFilms(data)));
    }
}

function receivedFilms(films) {
    return { type: FETCH_FILMS, payload: films };
}