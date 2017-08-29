// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListItemSecondaryAction, ListSubheader} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

class SpeciesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { species: props.species };
    }

    componentWillReceiveProps({species}) {
        this.setState({species});
    }

    render() {
        const speciesList = this.state.species.results || [];

        return (
            <List subheader={<ListSubheader>Species</ListSubheader>}>
                {
                    speciesList.map(specie =>
                        <ListItem button key={specie.name}>
                            <ListItemText primary={specie.name}/>
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

export default SpeciesList;