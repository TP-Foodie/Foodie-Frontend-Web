import React from 'react';
import Grid from "@material-ui/core/Grid";
import {GeneralLayout} from "../utils/GeneralLayout";

const WELCOME_TITLE = 'Bienvenido al sitio de administracion de Foodie';

export class WelcomeView extends React.Component {
  render() {
    return (
        <GeneralLayout>
            <Grid>
                <Grid
                    className={'container'}
                    container
                    direction="column"
                    alignItems="center">
                    <Grid item>
                        <h1>{WELCOME_TITLE}</h1>
                    </Grid>
                </Grid>

            </Grid>
        </GeneralLayout>
    );
  }
}
