import React from 'react';
import {Button, Grid, TextField, Paper, Typography} from '@material-ui/core';
import {WELCOME} from '../../navigation/routes';
import {styles} from "../../styles/common";
import {Email, Lock} from "@material-ui/icons";

const LOGIN_TEXT = 'LOGIN';
const EMAIL_PLACEHOLDER = "Email";
const PASSWORD_PLACEHOLDER = "Password";
const TITLE = "Plataforma de administración Foodie";

export class LoginView extends React.Component {
  render() {
      return (
          <Grid
              className={'container'}
              container
              direction="column"
              alignItems="center"
              justify="center"
              style={styles.login_container}
              spacing={5}
          >
            <Grid item>
              <Paper elevation={5} style={styles.login_box}>
                <Grid container direction="column"
                      alignItems="center"
                      justify="center">
                  <Grid item style={styles.login_title}>
                      <Typography variant="h5" align={"center"} style={styles.heading}>
                          {TITLE}
                      </Typography>
                  </Grid>
                  <Grid item style={styles.email_input} xs={12}>
                      <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                              <Email/>
                          </Grid>
                          <Grid item>
                              <TextField
                                  label={EMAIL_PLACEHOLDER}
                                  type={"email"}
                              />
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item style={styles.pd_full} xs={12}>
                      <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                              <Lock/>
                          </Grid>
                          <Grid item>
                              <TextField label={PASSWORD_PLACEHOLDER} type={"password"}/>
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item style={styles.pd_full} xs={12} >
                    <Button
                        variant="contained"
                        className={'login_btn'}
                        href={WELCOME}
                        size={"large"}>
                      {LOGIN_TEXT}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
    );
  }
}
