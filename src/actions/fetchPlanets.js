import SWAPI from '../api/SWAPI';
import { FETCH_PLANETS } from './actions';

export default () => {
    return {
        type: FETCH_PLANETS,
        payload: SWAPI.getPlanets()
    };
}