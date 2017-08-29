// @flow weak

import React, { Component } from 'react';
import SWAPI from '../api/SWAPI';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = { people: [] };
    }

    componentDidMount() {
        SWAPI.getPeople().then(people => this.setState({ people }));
    }

    render() {
        return (
            <PeopleList people={this.state.people}/>
        );
    }
}