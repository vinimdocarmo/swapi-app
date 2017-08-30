// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';
import NextPageButton from './NextPageButton';
import fetchSpeciesNextPage from '../actions/fetchSpeciesNextPage';
import {connect} from 'react-redux';

class SpeciesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { species: props.species };
        this.canFetchNextPage = this.canFetchNextPage.bind(this);
    }

    componentWillReceiveProps({species}) {
        this.setState({species});
    }

    canFetchNextPage() {
        return !!this.state.species.next;
    }

    render() {
        const speciesList = this.state.species.results || [];

        return (
            <div>
                <List subheader={<ListSubheader>Species</ListSubheader>}>
                    {
                        speciesList.map(specie =>
                            <ListItem button key={specie.name}>
                                <ListItemText primary={specie.name}/>
                            </ListItem>
                        )
                    }
                </List>
                <NextPageButton disabled={!this.canFetchNextPage()}
                                onNextPage={this.props.fetchSpeciesNextPage}/>
            </div>
        );
    }
}

export default connect(null, {fetchSpeciesNextPage})(SpeciesList);