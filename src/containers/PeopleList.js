// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';
import NextPageButton from './NextPageButton';
import fetchPeopleNextPage from '../actions/fetchPeopleNextPage';
import {connect} from 'react-redux';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {people: props.people};
        this.canFetchNextPage = this.canFetchNextPage.bind(this);
    }

    componentWillReceiveProps({people}) {
        this.setState({people});
    }

    canFetchNextPage() {
        return !!this.state.people.next;
    }

    render() {
        const peopleList = this.state.people.results || [];

        return (
            <div>
                <List subheader={<ListSubheader>People</ListSubheader>}>
                    {
                        peopleList.map(person =>
                            <ListItem button key={person.name}>
                                <ListItemText primary={person.name}/>
                            </ListItem>
                        )
                    }
                </List>
                <NextPageButton disabled={!this.canFetchNextPage()}
                                onNextPage={this.props.fetchPeopleNextPage}/>
            </div>
        );
    }
}

export default connect(null, {fetchPeopleNextPage})(PeopleList);