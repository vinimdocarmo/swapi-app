import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';

class NextPageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {disabled: this.props.disabled};
    }

    componentWillReceiveProps({disabled}) {
        this.setState({disabled});
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button disabled={this.state.disabled || this.props.isFetchingData} raised dense
                        onClick={() => this.props.onNextPage()} color="primary">
                    load more
                </Button>
            </div>
        );
    }
}

NextPageButton.propTypes = {
    onNextPage: PropTypes.func,
    disabled: PropTypes.bool,
};

export default connect(mapStateToProps)(NextPageButton);

function mapStateToProps({isFetchingData}) {
    return {isFetchingData};
}
