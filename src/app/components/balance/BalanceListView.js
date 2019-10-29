import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import PropTypes from "prop-types";
import {AddCircle, RemoveCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

const DEFAULT_BALANCE = 0;

export const BalanceListView = props => {
    return (
        <Grid
            className={"container"}
            container
            direction="column"
            justify="flex-start"
            style={{minHeight: '100vh'}}>
            <Grid item>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Nombre y Apellido</TableCell>
                                <TableCell align="center">Balance</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.users.map(user => (
                                <TableRow key={user.id} className={user.name}>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.balance || DEFAULT_BALANCE}</TableCell>
                                    <TableCell align="center">
                                        <IconButton>
                                            <AddCircle style={{color: "green"}}/>
                                        </IconButton>
                                        <IconButton>
                                            <RemoveCircle color={"error"}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    );
};

BalanceListView.propTypes = {
    users: PropTypes.array.isRequired
};
