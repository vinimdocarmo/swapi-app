import {CREATE_PLANET} from './actions';

export default ({name = '', terrain = '', diameter = 1} = {}) => {
    return {
        type: CREATE_PLANET,
        payload: {name, terrain, diameter}
    };
}