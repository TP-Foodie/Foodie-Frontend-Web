import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";

export class PlacesView extends React.Component {
    static propTypes = {
        places: PropTypes.array.isRequired
    };

    render() {
        const {places} = this.props;
        return(
            <Grid>
                <Grid
                    className={"container"}
                    container
                    direction="column"
                    justify="flex-start">
                    <Grid item>
                        <Paper className={"places_list"}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                    <TableCell align="center">Id</TableCell>
                                    <TableCell align="center">Nombre</TableCell>
                                    <TableCell align="center">Latitud</TableCell>
                                    <TableCell align="center">Longitud</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {places.map(place => (
                                        <TableRow key={place.id} className={place.name}>
                                            <TableCell align="center">
                                            {place.id}
                                            </TableCell>
                                            <TableCell align="center">{place.name}</TableCell>
                                            <TableCell align="center">{place.coordinates.latitude}</TableCell>
                                            <TableCell align="center">{place.coordinates.longitude}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
