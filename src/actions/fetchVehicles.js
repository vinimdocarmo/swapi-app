import SWAPI from '../api/SWAPI';
import { FETCH_VEHICLES } from './actions';
import fetchingManager from './fetchingManager';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchVehicles(getState())) {
            return Promise.resolve();
        }

        return fetchingManager(SWAPI.getVehicles)(dispatch)
            .then(data => dispatch(receivedVehicles(data)));
    }
}

function receivedVehicles(vehicles) {
    return { type: FETCH_VEHICLES, payload: vehicles };
}

function shouldFetchVehicles({vehicles}) {
    return vehicles.results.length === 0;
}