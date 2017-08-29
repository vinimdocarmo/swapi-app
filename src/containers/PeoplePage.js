// @flow weak

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PeopleList from '../components/PeopleList';
import fetchPeople from '../actions/fetchPeople';

class PeoplePage extends Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    render() {
        return (
            <PeopleList people={this.props.people}/>
        );
    }
}

export default connect(mapStateToProps, {fetchPeople})(PeoplePage);

function mapStateToProps({people}) {
    return {people};
}