import { combineReducers } from 'redux';
import PlanetsReducer from './PlanetsReducer';
import FilmsReducer from './FilmsReducer';
import StarshipsReducer from './StarshipsReducer';

const appReducer = combineReducers({
    planets: PlanetsReducer,
    films: FilmsReducer,
    starships: StarshipsReducer
});

export default appReducer;