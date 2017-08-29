// @flow weak

import React, { Component } from 'react';
import {connect} from 'react-redux';
import VehiclesList from '../components/VehiclesList';
import fetchVehicles from '../actions/fetchVehicles';

class VehiclesPage extends Component {
    componentDidMount() {
        this.props.fetchVehicles();
    }

    render() {
        return (
            <VehiclesList vehicles={this.props.vehicles}/>
        );
    }
}

export default connect(mapStateToProps, {fetchVehicles})(VehiclesPage);

function mapStateToProps({vehicles}) {
    return {vehicles};
}