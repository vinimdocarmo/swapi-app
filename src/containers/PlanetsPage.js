// @flow weak

import React, {Component} from 'react';
import PlanetsList from './PlanetsList';
import {connect} from 'react-redux';
import fetchPlanets from '../actions/fetchPlanets';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import PlanetDialog from '../components/PlanetDialog';

class PlanetsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {planetDialogOpen: false};
    }

    componentDidMount() {
        this.props.fetchPlanets();
    }

    render() {
        return (
            <div>
                <PlanetsList planets={this.props.planets}/>
                <PlanetDialog open={this.state.planetDialogOpen}/>
                <Button fab={true} color="primary" aria-label="add"
                        onClick={() => this.setState({planetDialogOpen: true})}
                        style={{position: 'absolute', right: '20px', bottom: '20px'}}>
                    <AddIcon/>
                </Button>
            </div>
        );
    }
}

export default connect(mapStateToProps, {fetchPlanets})(PlanetsPage);

function mapStateToProps({planets}) {
    return {planets};
}