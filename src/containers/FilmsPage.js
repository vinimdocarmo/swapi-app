// @flow weak

import React, { Component } from 'react';
import FilmsList from './FilmsList';
import fetchFilms from '../actions/fetchFilms';
import {connect} from 'react-redux';

class FilmsPage extends Component {
    componentDidMount() {
        this.props.fetchFilms();
    }

    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <FilmsList films={this.props.films}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, {fetchFilms})(FilmsPage);

function mapStateToProps({films}) {
    return {films};
}