import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import PropTypes from "prop-types"
import { Button } from '@material-ui/core';
import {userSubscriptions} from '../../common/constants';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowDownward'

export const SubscriptionListView = props => {
    const isPremium = (user) => user.subscription === userSubscriptions.PREMIUM;

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
                                <TableCell align="center">Usuario</TableCell>
                                <TableCell align="center">Tipo de suscripcion</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.users.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.subscription}</TableCell>
                                    <TableCell align="center">
                                        <Button 
                                            variant="contained" 
                                            style={{backgroundColor: isPremium(user) ? 'red' : 'green', color: 'white'}}
                                            startIcon={isPremium(user) ? <ArrowDownward/> : <ArrowUpward/>}
                                        >
                                            {isPremium(user) ? "Cancelar" : "Upgrade"}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    )
}

SubscriptionListView.propTypes = {
    users: PropTypes.array.isRequired
}
