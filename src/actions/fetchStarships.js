import SWAPI from '../api/SWAPI';
import { FETCH_STARSHIPS } from './actions';

export default () => {
    return {
        type: FETCH_STARSHIPS,
        payload: SWAPI.getStarships()
    };
}