// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import SWAPI from '../../api/SWAPI';

class StarshipsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { starships: {} };
    }

    componentDidMount() {
        SWAPI
            .getStarships()
            .then(starships => this.setState({ starships: starships }));
    }

    render() {
        const starshipsList = this.state.starships.results || [];

        return (
            <List subheader={<ListSubheader>Starships</ListSubheader>}>
                {
                    starshipsList.map(starships =>
                        <ListItem button key={starships.name}>
                            <ListItemText primary={starships.name}/>
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

export default StarshipsList;