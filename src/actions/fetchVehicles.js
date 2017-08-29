import SWAPI from '../api/SWAPI';
import { FETCH_VEHICLES } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return (dispatch, getState) => {

        if (!shouldFetchVehicles(getState())) {
            return Promise.resolve();
        }

        dispatch(startFetching());

        return SWAPI
            .getVehicles()
            .then(data => {
                dispatch(endFetching());
                return data;
            })
            .then(data => dispatch(receivedVehicles(data)));
    }
}

function receivedVehicles(vehicles) {
    return { type: FETCH_VEHICLES, payload: vehicles };
}

function shouldFetchVehicles({vehicles}) {
    return vehicles.results.length === 0;
}