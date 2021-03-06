// @flow weak

import React, { Component } from 'react';
import {connect} from 'react-redux';
import PeopleList from './PeopleList';
import fetchPeople from '../actions/fetchPeople';

class PeoplePage extends Component {
    componentDidMount() {
        this.props.fetchPeople();
    }

    render() {
        return (
            <div style={{display: 'flex',justifyContent: 'center'}}>
                <PeopleList people={this.props.people}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, {fetchPeople})(PeoplePage);

function mapStateToProps({people}) {
    return {people};
}