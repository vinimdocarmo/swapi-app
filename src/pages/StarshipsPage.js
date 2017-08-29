// @flow weak

import React, { Component } from 'react';
import SWAPI from '../api/SWAPI';
import StarshipsList from '../components/StarshipsList';

export default class StarshipsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { starships: [] };
    }

    componentDidMount() {
        SWAPI.getStarships().then(starships => this.setState({ starships }));
    }

    render() {
        return (
            <StarshipsList starships={this.state.starships}/>
        );
    }
}