// @flow

import React, {Component} from 'react';
import Typography from 'material-ui/Typography';
import withRoot from '../components/withRoot';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import {UIRouter, UIView, UISrefActive, UISref} from '@uirouter/react';
import RouteConfig from '../config/RouteConfig';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Progress from '../containers/Progress';
import SideNav from '../components/SideNav';

class Index extends Component {
    constructor(props) {
        super(props);
        this.APP_NAME = 'Star Wars Wiki';
        this.state = { sideNavOpen: false };

        this.handleSideNavOpen = this.handleSideNavOpen.bind(this);
    }

    handleSideNavOpen() {
        this.setState({sideNavOpen: true});
    }

    render() {
        return (
            <UIRouter plugins={RouteConfig.plugins} states={Object.values(RouteConfig.states)}>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton color="contrast" aria-label="Menu"
                            onClick={() => this.handleSideNavOpen()}>
                                <MenuIcon />
                            </IconButton>
                            <Typography type="title" color="inherit" style={{flex: 1}}>
                                <UISrefActive class="active">
                                    <UISref to={"home"}>
                                        <span style={{cursor: 'pointer'}}>{this.APP_NAME}</span>
                                    </UISref>
                                </UISrefActive>
                            </Typography>
                            <Button href="https://github.com/vinimdocarmo/swapi-app" color="contrast">GitHub</Button>
                        </Toolbar>
                    </AppBar>
                    <Progress/>
                    <SideNav open={this.state.sideNavOpen}/>
                    <UIView/>
                </div>
            </UIRouter>
        );
    }
}

export default withRoot(Index);
