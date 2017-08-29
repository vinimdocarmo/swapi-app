import {START_FETCHING, END_FETCHING} from './actions';

export function startFetching() {
    return { type: START_FETCHING, payload: true };
}

export function endFetching() {
    return { type: END_FETCHING, payload: false };
}