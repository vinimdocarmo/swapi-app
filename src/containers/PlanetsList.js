// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import removePlanet from '../actions/removePlanet';
import fetchPlanetsNextPage from '../actions/fetchPlanetsNextPage';
import {connect} from 'react-redux';
import NextPageButton from './NextPageButton';

class PlanetsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {planets: props.planets};
        this.canFetchNextPage = this.canFetchNextPage.bind(this);
    }

    componentWillReceiveProps({planets}) {
        this.setState({planets});
    }

    canFetchNextPage() {
        return !!this.state.planets.next;
    }

    render() {
        const planetsList = this.state.planets.results || [];

        return (
            <div>
                <List subheader={<ListSubheader>Planets</ListSubheader>}>
                    {
                        planetsList.map(planet =>
                            <ListItem button key={planet.name}>
                                <ListItemText primary={planet.name}/>
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete"
                                                onClick={() => this.props.removePlanet(planet)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    }
                </List>
                <NextPageButton disabled={!this.canFetchNextPage()}
                                onNextPage={this.props.fetchPlanetsNextPage}/>
            </div>
        );
    }
}

export default connect(null, {removePlanet, fetchPlanetsNextPage})(PlanetsList);