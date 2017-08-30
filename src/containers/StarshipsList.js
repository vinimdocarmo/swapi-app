// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';
import NextPageButton from './NextPageButton';
import fetchStarshipsNextPage from '../actions/fetchStarshipsNextPage';
import {connect} from 'react-redux';

class StarshipsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { starships: props.starships };
    }

    componentWillReceiveProps({starships}) {
        this.setState({starships});
    }

    canFetchNextPage() {
        return !!this.state.starships.next;
    }

    render() {
        const starshipsList = this.state.starships.results || [];

        return (
            <div style={{minWidth: '800px'}}>
                <List subheader={<ListSubheader>Starships</ListSubheader>}>
                    {
                        starshipsList.map(starships =>
                            <ListItem button key={starships.name}>
                                <ListItemText primary={starships.name}/>
                            </ListItem>
                        )
                    }
                </List>
                <NextPageButton disabled={!this.canFetchNextPage()}
                                onNextPage={this.props.fetchStarshipsNextPage}/>
            </div>
        );
    }
}

export default connect(null, {fetchStarshipsNextPage})(StarshipsList);