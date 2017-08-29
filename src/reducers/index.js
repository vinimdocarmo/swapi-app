import { combineReducers } from 'redux';
import PlanetsReducer from './PlanetsReducer';
import FilmsReducer from './FilmsReducer';

const appReducer = combineReducers({
    planets: PlanetsReducer,
    films: FilmsReducer
});

export default appReducer;