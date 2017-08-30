import {startFetching, endFetching} from './loading';

export default (promise) => {
    return dispatch => {
        dispatch(startFetching());

        return promise().then(res => {
            dispatch(endFetching());
            return res;
        });
    }
}