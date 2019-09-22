import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import {UserDetailButton} from "../utils/UserDetailButton"
import {USERS} from "../../navigation/routes";

const USER_DETAIL_LABEL = "Detalles"

export class UsersView extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    render() {
        const {users} = this.props;
        return(
            <Grid>
                <Grid
                    className={"container"}
                    container
                    direction="column"
                    justify="center"
                    style={{minHeight: '100vh'}}>
                    <Grid item>
                        <Paper className={"users_list"}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">Nombre y Apellido</TableCell>
                                <TableCell align="center">Tipo</TableCell>
                                <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map(user => (
                                    <TableRow key={user.id} className={user.name}>
                                        <TableCell align="center" component="th" scope="row">
                                        {user.id}
                                        </TableCell>
                                        <TableCell align="center">{user.name}</TableCell>
                                        <TableCell align="center">{user.type}</TableCell>
                                        <TableCell align="center">
                                            <UserDetailButton 
                                                href={`${USERS}/${user.id}`}
                                                label={USER_DETAIL_LABEL} />
                                        </TableCell>
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