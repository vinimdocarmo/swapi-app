// @flow weak

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import Input from 'material-ui/Input';
import {FormHelperText} from 'material-ui/Form';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import createPlanet from '../actions/createPlanet';
import editPlanet from '../actions/editPlanet';

export const MODES = {CREATE: 'CREATE', EDIT: 'EDIT'};

class PlanetDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            planetName: '',
            planetTerrain: '',
            planetDiameter: 1,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTerrainChange = this.handleTerrainChange.bind(this);
        this.handleDiameterChange = this.handleDiameterChange.bind(this);
        this.handleSave = this.props.mode === MODES.CREATE ? this.handleCreate.bind(this) : this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.clearPlanet = this.clearPlanet.bind(this);
        this.handleEntering = this.handleEntering.bind(this);
    }

    componentWillReceiveProps({planet}) {
        if (this.props.mode === MODES.EDIT) {
            this.oldName = planet.name;

            this.setState({
                planetName: planet.name,
                planetTerrain: planet.terrain,
                planetDiameter: planet.diameter
            });
        }
    }

    inputName = null;

    handleEntering() {
        this.inputName.focus();
    }

    handleNameChange(event) {
        this.setState({planetName: event.target.value});
    }

    handleTerrainChange(event) {
        this.setState({planetTerrain: event.target.value});
    }

    handleDiameterChange(event) {
        this.setState({planetDiameter: event.target.value});
    }

    handleCreate() {
        const planet = {
            name: this.state.planetName,
            terrain: this.state.planetTerrain,
            diameter: this.state.planetDiameter
        };

        this.props.createPlanet(planet);
        this.clearPlanet();
        this.props.whenClosing();
    }

    handleEdit() {
        const planet = {
            name: this.state.planetName,
            terrain: this.state.planetTerrain,
            diameter: this.state.planetDiameter
        };

        this.props.editPlanet(this.oldName, planet);
        this.clearPlanet();
        this.props.whenClosing();
    }

    clearPlanet() {
        this.setState({planetName: '', planetTerrain: '', planetDiameter: 1});
    }

    handleCancel() {
        this.props.whenClosing();
    };

    render() {
        return (
            <Dialog maxWidth="xs" open={this.props.open} whenClosing={this.props.whenClosing}
                    onEntering={this.handleEntering}>
                <DialogTitle>{this.props.mode === MODES.CREATE ? 'Create' : 'Edit'} Planet</DialogTitle>
                <DialogContent>
                    <TextField
                        id="name"
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={this.state.planetName}
                        onChange={this.handleNameChange}
                        inputRef={node => this.inputName = node}
                    />

                    <TextField
                        id="terrain"
                        label="Terrain"
                        fullWidth
                        margin="normal"
                        value={this.state.planetTerrain}
                        onChange={this.handleTerrainChange}
                    />

                    <FormControl fullWidth margin="normal">
                        <InputLabel htmlFor="diameter">Diameter</InputLabel>
                        <Input id="diameter" type="number" value={this.state.planetDiameter}
                               onChange={this.handleDiameterChange} min="1"/>
                        <FormHelperText>
                            The diameter of the planet in kilometers.
                        </FormHelperText>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.handleCancel}>
                        Cancel
                    </Button>
                    <Button raised color="accent" onClick={this.handleSave}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

PlanetDialog.propTypes = {
    whenClosing: PropTypes.func,
    open: PropTypes.bool,
    mode: PropTypes.string
};

export default connect(null, {createPlanet, editPlanet})(PlanetDialog);