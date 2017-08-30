// @flow weak

import React, { Component } from 'react';
import {connect} from 'react-redux';
import VehiclesList from './VehiclesList';
import fetchVehicles from '../actions/fetchVehicles';

class VehiclesPage extends Component {
    componentDidMount() {
        this.props.fetchVehicles();
    }

    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <VehiclesList vehicles={this.props.vehicles}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, {fetchVehicles})(VehiclesPage);

function mapStateToProps({vehicles}) {
    return {vehicles};
}