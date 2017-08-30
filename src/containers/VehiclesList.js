// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';
import NextPageButton from '../containers/NextPageButton';
import fetchVehiclesNextPage from '../actions/fetchVehiclesNextPage';
import {connect} from 'react-redux';

class VehiclesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vehicles: props.vehicles };
        this.canFetchNextPage = this.canFetchNextPage.bind(this);
    }

    componentWillReceiveProps({vehicles}) {
        this.setState({vehicles});
    }

    canFetchNextPage() {
        return !!this.state.vehicles.next;
    }

    render() {
        const vehiclesList = this.state.vehicles.results || [];

        return (
            <div style={{minWidth: '800px'}}>
                <List subheader={<ListSubheader>Vehicles</ListSubheader>}>
                    {
                        vehiclesList.map(vehicle =>
                            <ListItem button key={vehicle.name}>
                                <ListItemText primary={vehicle.name}/>
                            </ListItem>
                        )
                    }
                </List>
                <NextPageButton disabled={!this.canFetchNextPage()}
                                onNextPage={this.props.fetchVehiclesNextPage}/>
            </div>
        );
    }
}

export default connect(null, {fetchVehiclesNextPage})(VehiclesList);