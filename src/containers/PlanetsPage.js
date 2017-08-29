// @flow weak

import React, {Component} from 'react';
import PlanetsList from './PlanetsList';
import {connect} from 'react-redux';
import fetchPlanets from '../actions/fetchPlanets';

class PlanetsPage extends Component {
    componentDidMount() {
        this.props.fetchPlanets();
    }

    render() {
        return (
            <PlanetsList planets={this.props.planets}/>
        );
    }
}

export default connect(mapStateToProps, {fetchPlanets})(PlanetsPage);

function mapStateToProps({planets}) {
    return {planets};
}