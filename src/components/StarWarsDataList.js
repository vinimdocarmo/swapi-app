// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {GridList, GridListTile, GridListTileBar} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNewIcon from 'material-ui-icons/OpenInNew';
import {UISrefActive, UISref} from '@uirouter/react';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: '1200px'
    },
    root: theme.mixins.gutters({
        marginTop: 16,
        marginBottom: 16,
        paddingTop: 16,
        paddingBottom: 16,
    })
});

class StarWarsDateList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dataList: props.dataList };
    }

    render() {
        const {classes} = this.props;
        const dataList = this.state.dataList;

        return (
            <div className={classes.container}>
                <Paper className={classes.root}>
                    <GridList cellHeight={260} cols={3} className={classes.gridList}>
                        {dataList.map(data =>
                            <GridListTile key={data.img}>
                                <img src={data.img} alt={data.title}/>
                                <GridListTileBar
                                    title={data.title}
                                    actionIcon={
                                        <UISrefActive class="active">
                                            <UISref to={data.routeName}>
                                                <IconButton onClick={() => {}}>
                                                    <OpenInNewIcon color="rgba(255, 255, 255, 0.54)"/>
                                                </IconButton>
                                            </UISref>
                                        </UISrefActive>
                                    }
                                />
                            </GridListTile>,
                        )}
                    </GridList>
                </Paper>
            </div>
        );
    }
}

StarWarsDateList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StarWarsDateList);