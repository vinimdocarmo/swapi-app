import SWAPI from '../api/SWAPI';
import { FETCH_FILMS } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchFilms(getState())) {
            return Promise.resolve();
        }

        return fetchingManager(SWAPI.getFilms)(dispatch)
            .then(data => dispatch(receivedFilms(data)));
    }
}

function receivedFilms(films) {
    return { type: FETCH_FILMS, payload: films };
}

function shouldFetchFilms(state) {
    return state.films.results.length === 0;
}