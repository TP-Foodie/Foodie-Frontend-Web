import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import {WelcomeView} from "../welcome/WelcomeView"
import {rowDetail} from "../welcome/WelcomeView"
import {USERS} from "../../navigation/routes";
import {Typography} from "@material-ui/core";

export class UserDetailView extends React.Component{
    render(){
        const {user} = this.props

        return(
            <Grid>
                <WelcomeView/>
                <Grid
                    className={"container"}
                    container
                    direction="column">
                    <Paper className="user-detail">
                        <Grid container>
                            <Grid item xs={6} align="center">
                                !FOTO!
                            </Grid>
                            <Grid item xs={5} align="center">
                                <Typography>
                                    {user.name}
                                </Typography>
                                <Typography>
                                    Rol: {user.role}
                                </Typography>
                                <Typography>
                                    Email: {user.email}
                                </Typography>
                                <Typography>
                                    Teléfono: {user.phone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export class UsersView extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    render() {
        const {users} = this.props;

        return(
            <Grid>
                <WelcomeView/>
                <Grid
                    className={"container"}
                    container
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{minHeight: '100vh'}}>
                    <Grid item>
                        <Paper className={"users_list"}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">Nombre y Apellido</TableCell>
                                <TableCell align="center">Rol</TableCell>
                                <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map(user => (
                                    <TableRow key={user.id}>
                                        <TableCell component="th" scope="row">
                                        {user.id}
                                        </TableCell>
                                        <TableCell align="right">{user.name}</TableCell>
                                        <TableCell align="right">{user.role}</TableCell>
                                        <TableCell align="right">{rowDetail(`${USERS}/${user.id}`)}</TableCell>
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