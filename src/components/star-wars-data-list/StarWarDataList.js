// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {GridList, GridListTile, GridListTileBar} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNewIcon from 'material-ui-icons/OpenInNew';
import dataList from './dataList';

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
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container}>
                <Paper className={classes.root}>
                    <GridList cellHeight={260} cols={3} className={classes.gridList}>
                        {dataList.map(tile =>
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.title}/>
                                <GridListTileBar
                                    title={tile.title}
                                    actionIcon={
                                        <IconButton onClick={() => {}}>
                                            <OpenInNewIcon color="rgba(255, 255, 255, 0.54)"/>
                                        </IconButton>}
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