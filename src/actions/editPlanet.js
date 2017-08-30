import {EDIT_PLANET} from './actions';

export default (oldName = '', {name = '', terrain = '', diameter = 1} = {}) => {
    return {
        type: EDIT_PLANET,
        payload: {oldName, newPlanet: {name, terrain, diameter}}
    };
}