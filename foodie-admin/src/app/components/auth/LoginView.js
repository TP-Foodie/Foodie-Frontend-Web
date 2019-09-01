import React from "react";
import {Button, Grid} from '@material-ui/core';

const LOGIN_TEXT = "LOGIN";

export class LoginView extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item>
                    <Button variant="contained" color="primary" className={'login_btn'} href={''}>
                        {LOGIN_TEXT}
                    </Button>
                </Grid>
            </Grid>
        );
    }
}