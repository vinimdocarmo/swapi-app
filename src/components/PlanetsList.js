// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import removePlanet from '../actions/removePlanet';
import {connect} from 'react-redux';

class PlanetsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {planets: props.planets};
    }

    componentWillReceiveProps({planets}) {
        this.setState({planets});
    }

    render() {
        const planetsList = this.state.planets.results || [];

        return (
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
        );
    }
}

export default connect(null, {removePlanet})(PlanetsList);