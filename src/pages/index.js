// @flow

import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import StarWarDataList from '../components/star-war-data-list/StarWarDataList';

class Index extends Component {
    constructor(props) {
        super(props);
        this.APP_NAME = 'Star War Wiki';
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            {this.APP_NAME}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <StarWarDataList/>
            </div>
        );
    }
}

export default withRoot(Index);
