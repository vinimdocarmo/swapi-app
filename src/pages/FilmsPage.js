// @flow weak

import React, { Component } from 'react';
import SWAPI from '../api/SWAPI';
import FilmsList from '../components/FilmsList';

export default class FilmsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { films: [] };
    }

    componentDidMount() {
        SWAPI.getFilms().then(films => this.setState({ films }));
    }

    render() {
        return (
            <FilmsList films={this.state.films}/>
        );
    }
}