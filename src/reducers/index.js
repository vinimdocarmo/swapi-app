import { combineReducers } from 'redux';
import PlanetsReducer from './PlanetsReducer';

const appReducer = combineReducers({
    planets: PlanetsReducer
});

export default appReducer;