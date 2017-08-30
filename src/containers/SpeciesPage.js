// @flow weak

import React, { Component } from 'react';
import {connect} from 'react-redux';
import SpeciesList from './SpeciesList';
import fetchSpecies from '../actions/fetchSpecies';

class SpeciesPage extends Component {
    componentDidMount() {
        this.props.fetchSpecies();
    }

    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <SpeciesList species={this.props.species}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, {fetchSpecies})(SpeciesPage);

function mapStateToProps({species}) {
    return {species};
}