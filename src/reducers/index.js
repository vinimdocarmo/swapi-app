import { combineReducers } from 'redux';
import PlanetsReducer from './PlanetsReducer';
import FilmsReducer from './FilmsReducer';
import StarshipsReducer from './StarshipsReducer';
import PeopleReducer from './PeopleReducer';
import SpeciesReducer from './SpeciesReducer';

const appReducer = combineReducers({
    planets: PlanetsReducer,
    films: FilmsReducer,
    starships: StarshipsReducer,
    people: PeopleReducer,
    species: SpeciesReducer
});

export default appReducer;