import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { TextField } from "@material-ui/core";
import { styles } from "../../styles/common";

export const RuleFormView = props => {
    return (
        <Paper style={styles.container}>
            <Grid 
                className={"container"}
                container
                direction="column"
                justify="flex-start"
                style={{minHeight: '100vh'}}>
                <Grid item>
                    <TextField 
                        label={"Nombre"}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item style={styles.divider}>
                    <h2>Condiciones</h2>
                </Grid>
            </Grid>
        </Paper>
    );
}