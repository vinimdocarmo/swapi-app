// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';

class VehiclesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vehicles: props.vehicles };
    }

    componentWillReceiveProps({vehicles}) {
        this.setState({vehicles});
    }

    render() {
        const vehiclesList = this.state.vehicles.results || [];

        return (
            <List subheader={<ListSubheader>Vehicles</ListSubheader>}>
                {
                    vehiclesList.map(vehicle =>
                        <ListItem button key={vehicle.name}>
                            <ListItemText primary={vehicle.name}/>
                        </ListItem>
                    )
                }
            </List>
        );
    }
}

export default VehiclesList;