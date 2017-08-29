// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';

class FilmsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { films: props.films } ;
    }

    componentWillReceiveProps({films}) {
        this.setState({films});
    }

    render() {
        const filemsList = this.state.films.results || [];

        return (
            <List subheader={<ListSubheader>Films</ListSubheader>}>
                {
                    filemsList.map(film =>
                        <ListItem button key={film.title}>
                            <ListItemText primary={film.title}/>
                        </ListItem>
                    )
                }
            </List>
        );
    }
}

export default FilmsList;