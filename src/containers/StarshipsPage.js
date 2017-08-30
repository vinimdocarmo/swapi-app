// @flow weak

import React, { Component } from 'react';
import {connect} from 'react-redux';
import StarshipsList from './StarshipsList';
import fetchStarships from '../actions/fetchStarships';

class StarshipsPage extends Component {
    componentDidMount() {
        this.props.fetchStarships();
    }

    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <StarshipsList starships={this.props.starships}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, {fetchStarships})(StarshipsPage);

function mapStateToProps({starships}) {
    return {starships};
}