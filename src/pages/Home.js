// @flow weak

import React, {Component} from 'react';
import StarWarDataList from '../components/StarWarsDataList';
import RouteConfig from '../config/RouteConfig';

export default class Home extends Component {
    constructor(props) {
        super(props);
        const routeStates = RouteConfig.states;

        this.state = {
            dataList: [
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/6/60/Alderaan250ppx.PNG',
                    title: 'Planets',
                    routeName: routeStates.planets.name
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/en/e/ee/DeathStar2.jpg',
                    title: 'Starships',
                    routeName: routeStates.starships.name
                },
                {
                    img: 'https://lumiere-a.akamaihd.net/v1/images/databank_anakinskywalkerspodracer_01_169_fe359d32.jpeg?region=0%2C0%2C1560%2C878&width=768',
                    title: 'Vehicles',
                    routeName: routeStates.vehicles.name
                },
                {
                    img: 'http://screencrush.com/files/2014/05/star-wats-episode-7-chewbacca-first-look.jpg',
                    title: 'People',
                    routeName: routeStates.people.name
                },
                {
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png',
                    title: 'Films',
                    routeName: routeStates.films.name
                },
                {
                    img: 'http://www.denofgeek.us/sites/denofgeekus/files/styles/main_wide/public/6/32/darth_maul_0.jpg',
                    title: 'Species',
                    routeName: routeStates.species.name
                }
            ]
        };
    }

    render() {
        return (
            <StarWarDataList dataList={this.state.dataList}/>
        );
    }
}