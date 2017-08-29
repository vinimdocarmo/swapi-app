// @flow weak

import React, { Component } from 'react';
import SWAPI from '../api/SWAPI';
import PlanetsList from '../components/PlanetsList';

export default class PlanetsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { planets: [] };
    }

    componentDidMount() {
        SWAPI.getPlanets().then(planets => this.setState({ planets }));
    }

    render() {
        return (
            <PlanetsList planets={this.state.planets}/>
        );
    }
}