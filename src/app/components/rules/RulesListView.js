import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Add, CheckCircle, ChevronRight, RemoveCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import {styles} from "../../styles/common";
import {Link} from "react-router-dom";
import { RULE_CREATE, RULE_EDIT, BENEFIT_EDIT, BENEFIT_CREATE } from "../../navigation/routes";
import {NoContent} from "../utils/NoContent";

export const RulesListView = props => {
    const {rules} = props;

    const getActiveIcon = isActive => {
        return isActive ? <CheckCircle style={{color: "green"}}/> : <RemoveCircle color={"error"}/>
    }

    const renderContent = () => {
        return props.rules.length ? (
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
                            <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rules.map(rule => (
                                <TableRow key={rule.id}>
                                    <TableCell align="center">{rule.name}</TableCell>
                                    <TableCell align="center">{getActiveIcon(rule.active)}</TableCell>
                                    <TableCell align="center">
                                        <IconButton component={Link} to={props.benefits ? `${BENEFIT_EDIT}/${rule.id}` : `${RULE_EDIT}/${rule.id}`}>
                                            <ChevronRight/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        ) : <NoContent/>;
    }

    return (
        <Grid>
            {renderContent()}
            <Grid item>
                <Fab style={styles.create_fab} component={Link} to={props.benefits ? BENEFIT_CREATE : RULE_CREATE}>
                    <Add/>
                </Fab>
            </Grid>
        </Grid>
    );
}

RulesListView.propTypes = {
    rules: PropTypes.array.isRequired,
    benefits: PropTypes.bool,
}
