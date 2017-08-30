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
import ConfirmRemoveDialog from './ConfirmRemoveDialog';
import {MODES as PLANET_DIALOG_MODES} from './PlanetDialog';

class PlanetsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {planets: props.planets, selectedPlanet: null, planetDialogOpen: false, removeDialogOpen: false};
        this.canFetchNextPage = this.canFetchNextPage.bind(this);
        this.handleOpenEdition = this.handleOpenEdition.bind(this);
        this.handleOpenRemoval = this.handleOpenRemoval.bind(this);
        this.handleEditionRequestClone = this.handleEditionRequestClone.bind(this);
        this.handleRemovalRequestClone = this.handleRemovalRequestClone.bind(this);
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

    handleOpenRemoval(selectedPlanet) {
        this.setState({selectedPlanet, removeDialogOpen: true});
    }

    handleEditionRequestClone() {
        this.setState({planetDialogOpen: false});
    }

    handleRemovalRequestClone(confirm) {
        if (confirm) {
            this.props.removePlanet(this.state.selectedPlanet);
        }
        this.setState({removeDialogOpen: false});
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
                                                onClick={() => this.handleOpenRemoval(planet)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    }
                </List>
                <NextPageButton disabled={!this.canFetchNextPage()}
                                onNextPage={this.props.fetchPlanetsNextPage}/>
                <PlanetDialog open={this.state.planetDialogOpen} onRequestClose={this.handleEditionRequestClone}
                              mode={PLANET_DIALOG_MODES.EDIT} planet={this.state.selectedPlanet}/>
                <ConfirmRemoveDialog open={this.state.removeDialogOpen} onRequestClose={this.handleRemovalRequestClone}/>
            </div>
        );
    }
}

export default connect(null, {removePlanet, fetchPlanetsNextPage})(PlanetsList);