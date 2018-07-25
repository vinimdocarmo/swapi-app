import React, {Component} from 'react';
import Dialog, {DialogTitle, DialogActions} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

class ConfirmRemoveDialog extends Component {
    render() {
        return (
            <Dialog open={this.props.open} whenClosing={() => this.props.whenClosing(false)}>
                <DialogTitle>
                    {"Confirm item removal?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => this.props.whenClosing(false)} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={() => this.props.whenClosing(true)} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ConfirmRemoveDialog.propTypes = {
    whenClosing: PropTypes.func,
    open: PropTypes.bool
};

export default ConfirmRemoveDialog;
