import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from "@material-ui/core";
import { styles } from "../../styles/common";
import { Add } from "@material-ui/icons";
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

export const RuleFormView = props => {
    const [consequenceType, setConsequenceType] = useState("V");
    const [consequenceValue, setConsequenceValue] = useState(0);
    const [consequenceValueType, setConsequenceValueType] = useState("-");

    const renderDivider = title => {
        return <Grid item style={styles.divider}>
            <h2>{title}</h2>
        </Grid>
    };

    const renderAddButton = title => {
        return <Grid item>
            <Button>
                <Grid container direction="row" alignItems="center">
                    <Add style={{color: "green"}}/>
                    <p>{title}</p>
                </Grid>
            </Button>
        </Grid>
    }

    const handleBack = () => {
        props.history.goBack();
    }

    const handleSubmit = () => {
        props.handleSubmit({consequenceType, consequenceValue, consequenceValueType});
    }

    return (
        <Paper style={styles.container}>
            <Grid 
                className={"container"}
                container
                direction="column"
                justify="flex-start"
                style={{minHeight: '100vh'}}
                spacing={2}>
                <Grid item>
                    <TextField 
                        label={"Nombre"}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                {renderDivider("Condiciones")}
                {renderAddButton("Agregar condicion")}
                {renderDivider("Consecuencia")}
                <Grid item>
                    <Grid container direction="row" xs={13} spacing={2}>
                        <Grid item xs={1}>
                            <TextField 
                                select
                                fullWidth
                                variant="outlined"
                                value={consequenceValueType}
                                onChange={event => setConsequenceValueType(event.target.value)}
                            >
                                <MenuItem value={"-"}>Descuento</MenuItem>
                                <MenuItem value={"+"}>Recargo</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={1}>
                            <TextField 
                                select
                                fullWidth
                                variant="outlined"
                                value={consequenceType}
                                onChange={event => setConsequenceType(event.target.value)}
                            >
                                <MenuItem value={"P"}>%</MenuItem>
                                <MenuItem value={"V"}>$</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField 
                                type={"number"}
                                label={"Valor"}
                                fullWidth
                                variant="outlined"
                                value={consequenceValue}
                                onChange={event => setConsequenceValue(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify={"flex-end"} direction={"row"} alignItems="flex-end" spacing={2} style={styles.pd_full_sm}>
                    <Grid item>
                        <Button variant="contained" onClick={handleBack}>
                            CANCELAR
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={handleSubmit}>
                            GUARDAR
                        </Button>
                    </Grid>
                </Grid>
        </Paper>
    );
}

RuleFormView.propTypes = {
    history: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default withRouter(RuleFormView);