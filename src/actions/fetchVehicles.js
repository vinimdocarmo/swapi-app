import SWAPI from '../api/SWAPI';
import { FETCH_VEHICLES } from './actions';
import {startFetching, endFetching} from './loading';

export default () => {
    return dispatch => {
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