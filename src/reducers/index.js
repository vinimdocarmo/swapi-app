import { combineReducers } from 'redux';
import PlanetsReducer from './PlanetsReducer';
import FilmsReducer from './FilmsReducer';
import StarshipsReducer from './StarshipsReducer';
import PeopleReducer from './PeopleReducer';

const appReducer = combineReducers({
    planets: PlanetsReducer,
    films: FilmsReducer,
    starships: StarshipsReducer,
    people: PeopleReducer
});

export default appReducer;