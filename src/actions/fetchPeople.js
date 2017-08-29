import SWAPI from '../api/SWAPI';
import { FETCH_PEOPLE } from './actions';

export default () => {
    return {
        type: FETCH_PEOPLE,
        payload: SWAPI.getPeople()
    };
}