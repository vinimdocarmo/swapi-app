// @flow weak

import React from 'react';
import List, {ListItem, ListItemText, ListSubheader} from 'material-ui/List';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {people: props.people};
    }

    componentWillReceiveProps({people}) {
        this.setState({people});
    }

    render() {
        const peopleList = this.state.people.results || [];

        return (
            <List subheader={<ListSubheader>People</ListSubheader>}>
                {
                    peopleList.map(person =>
                        <ListItem button key={person.name}>
                            <ListItemText primary={person.name}/>
                        </ListItem>
                    )
                }
            </List>
        );
    }
}

export default PeopleList;