import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {PLACES} from "../../navigation/routes";

const WELCOME_TITLE = 'Bienvenido al sitio de administracion de Foodie';
const PLACES_TITLE = "Lugares";

export class WelcomeView extends React.Component {
  render() {
    return (
      <Grid
        className={'container'}
        container
        direction="column"
        alignItems="center">
        <Grid item>
            <h1>{WELCOME_TITLE}</h1>
        </Grid>
          <Grid item>
              <Button className={"places_btn"} href={PLACES} color={"primary"} variant={"contained"}>
                  {PLACES_TITLE}
              </Button>
          </Grid>
      </Grid>
    );
  }
}
