import SWAPI from '../api/SWAPI';
import { FETCH_SPECIES } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return dispatch => {
        dispatch(startFetching());
        return SWAPI
            .getSpecies()
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedSpecies(data)));
    }
}

function receivedSpecies(species) {
    return { type: FETCH_SPECIES, payload: species };
}