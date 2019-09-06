import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import {ListItemText} from "@material-ui/core";
import PropTypes from "prop-types";

export class UsersView extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    render() {
        const {users} = this.props;

        return(
            <Grid
                className={"container"}
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: '100vh'}}>
                <Grid item>
                    <List className={"users_list"}>
                        {users.map(user =>
                            <ListItemText key={user.id} className={user.name}>
                                {user.name}
                            </ListItemText>
                        )}
                    </List>
                </Grid>
            </Grid>
        );
    }
}