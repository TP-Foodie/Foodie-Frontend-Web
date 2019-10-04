import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CheckCircle, RemoveCircle } from "@material-ui/icons";

export const RulesListView = props => {
    const {rules} = props;

    const getActiveIcon = isActive => {
        return isActive ? <CheckCircle style={{color: "green"}}/> : <RemoveCircle color={"error"}/>
    }

    return (
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
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Activa</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rules.map(rule => (
                                <TableRow key={rule.id}>
                                    <TableCell align="center">{rule.name}</TableCell>
                                    <TableCell align="center">{getActiveIcon(rule.active)}</TableCell>
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

RulesListView.propTypes = {
    rules: PropTypes.array.isRequired
}
