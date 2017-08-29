import SWAPI from '../api/SWAPI';
import { FETCH_FILMS } from './actions';

export default () => {
    return {
        type: FETCH_FILMS,
        payload: SWAPI.getFilms()
    };
}