// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

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
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete">
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                }
            </List>
        );
    }
}

export default FilmsList;