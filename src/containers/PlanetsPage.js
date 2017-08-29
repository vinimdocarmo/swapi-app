// @flow weak

import React, {Component} from 'react';
import PlanetsList from '../components/PlanetsList';
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

function mapStateToProps({planets}) {
    return {planets};
}

export default connect(mapStateToProps, {fetchPlanets})(PlanetsPage);