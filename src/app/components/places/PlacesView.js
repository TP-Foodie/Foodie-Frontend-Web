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
                    alignItems="center"
                    justify="center"
                    style={{minHeight: '100vh'}}>
                    <Grid item>
                        <Paper className={"places_list"}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Latitud</TableCell>
                                <TableCell align="right">Longitud</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {places.map(place => (
                                    <TableRow key={place._id} className={place.name}>
                                        <TableCell component="th" scope="row">
                                        {place._id}
                                        </TableCell>
                                        <TableCell align="right">{place.name}</TableCell>
                                        <TableCell align="right">{place.coordinates.latitude}</TableCell>
                                        <TableCell align="right">{place.coordinates.longitude}</TableCell>
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
