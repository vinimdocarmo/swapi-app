// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';
import NextPageButton from './NextPageButton';
import fetchFilmsNextPage from '../actions/fetchFilmsNextPage';
import {connect} from 'react-redux';

class FilmsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {films: props.films};
        this.canFetchNextPage = this.canFetchNextPage.bind(this);
    }

    componentWillReceiveProps({films}) {
        this.setState({films});
    }

    canFetchNextPage() {
        return !!this.state.films.next;
    }

    render() {
        const filmsList = this.state.films.results || [];

        return (
            <div style={{minWidth: '800px'}}>
                <List subheader={<ListSubheader>Films</ListSubheader>}>
                    {
                        filmsList.map(film =>
                            <ListItem button key={film.title}>
                                <ListItemText primary={film.title}/>
                            </ListItem>
                        )
                    }
                </List>
                <NextPageButton disabled={!this.canFetchNextPage()}
                                onNextPage={this.props.fetchFilmsNextPage}/>
            </div>

        );
    }
}

export default connect(null, {fetchFilmsNextPage})(FilmsList);