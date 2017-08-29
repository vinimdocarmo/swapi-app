// @flow

import React from 'react';
import {connect} from 'react-redux';
import {LinearProgress} from 'material-ui/Progress';

const Progress = (props) => {
    return props.isFetchingData ? <LinearProgress color="accent" mode="query"/> : null;
};

export default connect(mapStateToProps)(Progress);

function mapStateToProps({isFetchingData}) {
    return {isFetchingData};
}