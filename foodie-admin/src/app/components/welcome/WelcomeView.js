import React from "react";
import Grid from "@material-ui/core/Grid";

const WELCOME_TITLE = "Bienvenido al sitio de administracion de Foodie";

export class WelcomeView extends React.Component {
    render() {
        return (
            <Grid className={"container"}>
                <h1>{WELCOME_TITLE}</h1>
            </Grid>
        );
    }
}