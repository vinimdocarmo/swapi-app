// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import removePlanet from '../actions/removePlanet';
import fetchPlanetsNextPage from '../actions/fetchPlanetsNextPage';
import {connect} from 'react-redux';
import NextPageButton from './NextPageButton';
import PlanetDialog from './PlanetDialog';
import {MODES as PLANET_DIALOG_MODES} from './PlanetDialog';

class PlanetsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {planets: props.planets, selectedPlanet: null, planetDialogOpen: false};
        this.canFetchNextPage = this.canFetchNextPage.bind(this);
        this.handleOpenEdition = this.handleOpenEdition.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    componentWillReceiveProps({planets}) {
        this.setState({planets});
    }

    canFetchNextPage() {
        return !!this.state.planets.next;
    }

    handleOpenEdition(selectedPlanet) {
        this.setState({selectedPlanet, planetDialogOpen: true});
    }

    handleRequestClose() {
        this.setState({planetDialogOpen: false});
    }

    render() {
        const planetsList = this.state.planets.results || [];

        return (
            <div style={{minWidth: '800px'}}>
                <List subheader={<ListSubheader>Planets</ListSubheader>}>
                    {
                        planetsList.map(planet =>
                            <ListItem button key={planet.name} onClick={() => this.handleOpenEdition(planet)}>
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
                <PlanetDialog open={this.state.planetDialogOpen} onRequestClose={this.handleRequestClose}
                              mode={PLANET_DIALOG_MODES.EDIT} planet={this.state.selectedPlanet}/>
            </div>
        );
    }
}

export default connect(null, {removePlanet, fetchPlanetsNextPage})(PlanetsList);