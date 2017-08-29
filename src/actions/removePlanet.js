import { REMOVE_PLANET } from './actions';

export default ({name}) => {
    return {
        type: REMOVE_PLANET,
        payload: {name}
    };
}