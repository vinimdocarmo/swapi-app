import SWAPI from '../api/SWAPI';
import { FETCH_SPECIES } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchSpecies(getState())) {
            return Promise.resolve();
        }

        return fetchingManager(SWAPI.getSpecies)(dispatch)
            .then(data => dispatch(receivedSpecies(data)));
    }
}

function receivedSpecies(species) {
    return { type: FETCH_SPECIES, payload: species };
}

function shouldFetchSpecies({species}) {
    return species.results.length === 0;
}