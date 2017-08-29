import SWAPI from '../api/SWAPI';
import { FETCH_SPECIES } from './actions';

export default () => {
    return {
        type: FETCH_SPECIES,
        payload: SWAPI.getSpecies()
    };
}