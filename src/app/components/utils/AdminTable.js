import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const DETAILS_LABEL = "Ver";

class AdminTable extends Component {
    static propTypes = {
        columns: PropTypes.array.isRequired,
        rows: PropTypes.array.isRequired,
        detailsLink: PropTypes.string.isRequired
    }


    render() {
        const {columns, rows, detailsLink} = this.props;

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
                        {
                            columns.map(column => <TableCell key={column} align="center">{column}</TableCell>)
                        }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row[0]}>
                                {
                                    row.map(data => <TableCell key={data} align="center">{data}</TableCell>)
                                }
                                <Link
                                    component={Button}
                                    to={detailsLink}
                                    color={"primary"}
                                >
                                    {DETAILS_LABEL}
                                </Link>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
        );
    }
}

export default AdminTable;
