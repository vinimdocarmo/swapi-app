import SWAPI from '../api/SWAPI';
import { FETCH_VEHICLES } from './actions';

export default () => {
    return {
        type: FETCH_VEHICLES,
        payload: SWAPI.getVehicles()
    };
}