// @flow weak

import React, {Component} from 'react';
import StarWarDataList from '../components/StarWarsDataList';
import RouteConfig from '../config/RouteConfig';

export default class Home extends Component {
    constructor(props) {
        super(props);
        const routeStates = RouteConfig.states;

        this.dataList = [
            {
                img: '/assets/planets.jpg',
                title: 'Planets',
                routeName: routeStates.planets.name
            },
            {
                img: '/assets/starships.jpg',
                title: 'Starships',
                routeName: routeStates.starships.name
            },
            {
                img: '/assets/vehicles.jpg',
                title: 'Vehicles',
                routeName: routeStates.vehicles.name
            },
            {
                img: '/assets/people.jpg',
                title: 'People',
                routeName: routeStates.people.name
            },
            {
                img: '/assets/films.jpg',
                title: 'Films',
                routeName: routeStates.films.name
            },
            {
                img: '/assets/species.jpg',
                title: 'Species',
                routeName: routeStates.species.name
            }
        ];
    }

    render() {
        return (
            <StarWarDataList dataList={this.dataList}/>
        );
    }
}