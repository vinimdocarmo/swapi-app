// @flow weak

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';

class ConfirmationDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, planet: {name: 'Terra'}};
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps({open}) {
        this.setState({open});
    }

    handleChange(event) {
        this.setState({planet: {name: event.target.value}});
    };

    render() {
        return (
            <Dialog maxWidth="xs" open={this.state.open}>
                <DialogTitle>Planet Dialog</DialogTitle>
                <DialogContent>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input id="name" value={this.state.planet.name} onChange={this.handleChange}/>
                        </FormControl>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Cancel
                    </Button>
                    <Button raised color="accent">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ConfirmationDialog.propTypes = {
    onRequestClose: PropTypes.func,
    value: PropTypes.string,
};

export default ConfirmationDialog;