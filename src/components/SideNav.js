import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {UISrefActive, UISref} from '@uirouter/react';
import RouteConfig from '../config/RouteConfig';

const styles = {
    list: {
        width: 250,
        flex: 'initial',
    },
    listFull: {
        width: 'auto',
        flex: 'initial',
    },
};

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = { open: this.props.open };

        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps({open}) {
        this.setState({open});
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        const {classes} = this.props;
        const {states} = RouteConfig;

        return (
            <Drawer open={this.state.open} onRequestClose={this.handleClose}>
                <List className={classes.list}>
                    <ListItem button onClick={this.handleClose}>
                        <UISrefActive class="active">
                            <UISref to={states.home.name}>
                                <ListItemText primary="Home" />
                            </UISref>
                        </UISrefActive>
                    </ListItem>
                    <Divider/>
                    <ListItem button onClick={this.handleClose}>
                        <UISrefActive class="active">
                            <UISref to={states.planets.name}>
                                <ListItemText primary="Planets" />
                            </UISref>
                        </UISrefActive>
                    </ListItem>
                    <ListItem button onClick={this.handleClose}>
                        <UISrefActive class="active">
                            <UISref to={states.starships.name}>
                                <ListItemText primary="Starships" />
                            </UISref>
                        </UISrefActive>
                    </ListItem>
                    <ListItem button onClick={this.handleClose}>
                        <UISrefActive class="active">
                            <UISref to={states.vehicles.name}>
                                <ListItemText primary="Vehicles" />
                            </UISref>
                        </UISrefActive>
                    </ListItem>
                    <ListItem button onClick={this.handleClose}>
                        <UISrefActive class="active">
                            <UISref to={states.people.name}>
                                <ListItemText primary="People" />
                            </UISref>
                        </UISrefActive>
                    </ListItem>
                    <ListItem button onClick={this.handleClose}>
                        <UISrefActive class="active">
                            <UISref to={states.films.name}>
                                <ListItemText primary="Films" />
                            </UISref>
                        </UISrefActive>
                    </ListItem>
                    <ListItem button onClick={this.handleClose}>
                        <UISrefActive class="active">
                            <UISref to={states.species.name}>
                                <ListItemText primary="Species" />
                            </UISref>
                        </UISrefActive>
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNav);