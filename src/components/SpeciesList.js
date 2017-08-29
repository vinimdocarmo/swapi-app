// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';

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
                        </ListItem>
                    )
                }
            </List>
        );
    }
}

export default SpeciesList;