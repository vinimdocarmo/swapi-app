// @flow weak

import React, { Component } from 'react';
import FilmsList from '../components/FilmsList';
import fetchFilms from '../actions/fetchFilms';
import {connect} from 'react-redux';

class FilmsPage extends Component {
    componentDidMount() {
        this.props.fetchFilms();
    }

    render() {
        return (
            <FilmsList films={this.props.films}/>
        );
    }
}

export default connect(mapStateToProps, {fetchFilms})(FilmsPage);

function mapStateToProps({films}) {
    return {films};
}