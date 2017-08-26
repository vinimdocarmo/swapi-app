import StarWarDataList from '../components/star-wars-data-list/StarWarDataList';
import PeopleList from '../components/star-wars-data-list/PeopleList';
import FilmsList from '../components/star-wars-data-list/FilmsList';
import SpeciesList from '../components/star-wars-data-list/SpeciesList';
import VehiclesList from '../components/star-wars-data-list/VehiclesList';
import StarshipsList from '../components/star-wars-data-list/StarshipsList';
import PlanetsList from '../components/star-wars-data-list/PlanetsList';
import {pushStateLocationPlugin} from '@uirouter/react';

export default class RouteConfig {
    static states = {
        home: {
            name: 'home',
            url: '/',
            component: StarWarDataList
        },
        people: {
            name: 'people',
            url: '/people',
            component: PeopleList
        },
        planets: {
            name: 'planets',
            url: '/planets',
            component: PlanetsList
        },
        films: {
            name: 'films',
            url: '/films',
            component: FilmsList
        },
        species: {
            name: 'species',
            url: '/species',
            component: SpeciesList
        },
        vehicles: {
            name: 'vehicles',
            url: '/vehicles',
            component: VehiclesList
        },
        starships: {
            name: 'starships',
            url: '/starships',
            component: StarshipsList
        }
    };

    static plugins = [pushStateLocationPlugin];
};