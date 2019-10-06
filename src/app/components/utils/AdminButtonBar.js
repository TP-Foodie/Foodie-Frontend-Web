import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

export const AdminButtonBar = props => {
    return (
        <Grid container justify={"flex-end"} direction={"row"} alignItems="flex-end" spacing={2} style={{padding: 10}}>
            <Grid item>
                <Button variant="contained" onClick={props.handleBack}>
                    CANCELAR
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary" onClick={props.handleSubmit}>
                    GUARDAR
                </Button>
            </Grid>
        </Grid>
    );
}

AdminButtonBar.propTypes = {
    handleBack: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}