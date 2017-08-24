// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import SWAPI from '../../api/SWAPI';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: {} };
    }

    componentDidMount() {
        SWAPI
            .getPeople()
            .then(people => this.setState({ people }));
    }

    render() {
        const peopleList = this.state.people.results || [];

        return (
            <List subheader={<ListSubheader>People</ListSubheader>}>
                {
                    peopleList.map(person =>
                        <ListItem button key={person.name}>
                            <ListItemText primary={person.name}/>
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

export default PeopleList;