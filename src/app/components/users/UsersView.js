import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import {USERS} from "../../navigation/routes";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const USER_DETAIL_LABEL = "Detalles";

export class UsersView extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    userTypePretty = (type) => {
        const types = {
            BACK_OFFICE: "Administrador",
            CUSTOMER: "Cliente",
            DELIVERY: "Delivery",
        }
        return types[type];
    }

    render() {
        const {users} = this.props;
        return(
            <Grid>
                <Grid
                    className={"container"}
                    container
                    direction="column"
                    justify="flex-start"
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
                                        <TableCell align="center">{this.userTypePretty(user.type)}</TableCell>
                                        <TableCell align="center">
                                            <Link
                                                component={Button}
                                                to={`${USERS}/${user.id}`}
                                                color={"primary"}
                                            >
                                                {USER_DETAIL_LABEL}
                                            </Link>
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