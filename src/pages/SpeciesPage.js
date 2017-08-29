// @flow weak

import React, { Component } from 'react';
import SWAPI from '../api/SWAPI';
import SpeciesList from '../components/SpeciesList';

export default class SpeciesPage extends Component {
    constructor(props) {
        super(props);
        this.state = { species: [] };
    }

    componentDidMount() {
        SWAPI.getSpecies().then(species => this.setState({ species }));
    }

    render() {
        return (
            <SpeciesList species={this.state.species}/>
        );
    }
}