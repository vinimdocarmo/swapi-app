// @flow weak

import React, { Component } from 'react';
import {connect} from 'react-redux';
import StarshipsList from '../components/StarshipsList';
import fetchStarships from '../actions/fetchStarships';

class StarshipsPage extends Component {
    componentDidMount() {
        this.props.fetchStarships();
    }

    render() {
        return (
            <StarshipsList starships={this.props.starships}/>
        );
    }
}

export default connect(mapStateToProps, {fetchStarships})(StarshipsPage);

function mapStateToProps({starships}) {
    return {starships};
}