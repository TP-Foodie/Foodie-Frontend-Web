import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {PLACES, USERS} from "../../navigation/routes";

const WELCOME_TITLE = 'Bienvenido al sitio de administracion de Foodie';
const PLACES_TITLE = "Lugares";
const USERS_TITLE = "Usuarios";

const buttonStyle = {
  "margin": '0.5%',
  "paddingLeft": '1%'
}

export class WelcomeView extends React.Component {
  render() {
    return (
      <Grid>
        <Grid
          className={'container'}
          container
          direction="column"
          alignItems="center">
          <Grid item>
              <h1>{WELCOME_TITLE}</h1>
          </Grid>
          <Grid
            className={'container'}
            container
            direction="row"
            alignItems="center"
            justify="center">
              <Grid item style={buttonStyle}>
                <Button className={"users_btn"} href={USERS} color={"primary"} variant={"contained"}>
                      {USERS_TITLE}
                </Button>
              </Grid>
              <Grid item style={buttonStyle}>
                <Button className={"places_btn"} href={PLACES} color={"primary"} variant={"contained"}>
                      {PLACES_TITLE}
                </Button>
              </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    );
  }
}
