import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import {ListItemText} from "@material-ui/core";
import PropTypes from "prop-types";

export class PlacesView extends React.Component {
    static propTypes = {
        places: PropTypes.array.isRequired
    };

    render() {
        const {places} = this.props;

        return(
            <Grid container className={"container"}>
                <Grid item xs={places.length}>
                    <List className={"places_list"}>
                        {places.map(place =>
                            <ListItemText key={place.id} className={place.name}>
                                {place.name}
                            </ListItemText>
                        )}
                    </List>
                </Grid>
            </Grid>
        );
    }
}