import Home from '../pages/Home';
import PeoplePage from '../pages/PeoplePage';
import FilmsPage from '../containers/FilmsPage';
import SpeciesPage from '../pages/SpeciesPage';
import VehiclesPage from '../pages/VehiclesPage';
import StarshipsPage from '../containers/StarshipsPage';
import PlanetPage from '../containers/PlanetsPage';
import {pushStateLocationPlugin} from '@uirouter/react';

export default class RouteConfig {
    static states = {
        home: {
            name: 'home',
            url: '/',
            component: Home
        },
        people: {
            name: 'people',
            url: '/people',
            component: PeoplePage
        },
        planets: {
            name: 'planets',
            url: '/planets',
            component: PlanetPage
        },
        films: {
            name: 'films',
            url: '/films',
            component: FilmsPage
        },
        species: {
            name: 'species',
            url: '/species',
            component: SpeciesPage
        },
        vehicles: {
            name: 'vehicles',
            url: '/vehicles',
            component: VehiclesPage
        },
        starships: {
            name: 'starships',
            url: '/starships',
            component: StarshipsPage
        }
    };

    static plugins = [pushStateLocationPlugin];
};