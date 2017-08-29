// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';

class StarshipsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { starships: props.starships };
    }

    componentWillReceiveProps({starships}) {
        this.setState({starships});
    }

    render() {
        const starshipsList = this.state.starships.results || [];

        return (
            <List subheader={<ListSubheader>Starships</ListSubheader>}>
                {
                    starshipsList.map(starships =>
                        <ListItem button key={starships.name}>
                            <ListItemText primary={starships.name}/>
                        </ListItem>
                    )
                }
            </List>
        );
    }
}

export default StarshipsList;