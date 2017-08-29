// @flow weak

import React, { Component } from 'react';
import SWAPI from '../api/SWAPI';
import VehiclesList from '../components/VehiclesList';

export default class VehiclesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { vehicles: [] };
    }

    componentDidMount() {
        SWAPI.getVehicles().then(vehicles => this.setState({ vehicles }));
    }

    render() {
        return (
            <VehiclesList vehicles={this.state.vehicles}/>
        );
    }
}