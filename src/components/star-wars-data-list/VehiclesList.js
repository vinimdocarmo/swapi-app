// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import SWAPI from '../../api/SWAPI';


class VehiclesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vehicles: {} };
    }

    componentDidMount() {
        SWAPI
            .getVehicles()
            .then(vehicles => this.setState({ vehicles: vehicles }));
    }

    render() {
        const vehiclesList = this.state.vehicles.results || [];

        return (
            <List subheader={<ListSubheader>Vehicles</ListSubheader>}>
                {
                    vehiclesList.map(vehicle =>
                        <ListItem button key={vehicle.name}>
                            <ListItemText primary={vehicle.name}/>
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete">
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

export default VehiclesList;