import { combineReducers } from 'redux';
import PlanetsReducer from './PlanetsReducer';
import FilmsReducer from './FilmsReducer';
import StarshipsReducer from './StarshipsReducer';
import PeopleReducer from './PeopleReducer';
import SpeciesReducer from './SpeciesReducer';
import VehiclesReducer from './VehiclesReducer';
import LoadingReducer from './LoadingReducer';

const appReducer = combineReducers({
    planets: PlanetsReducer,
    films: FilmsReducer,
    starships: StarshipsReducer,
    people: PeopleReducer,
    species: SpeciesReducer,
    vehicles: VehiclesReducer,
    isFetchingData: LoadingReducer
});

export default appReducer;