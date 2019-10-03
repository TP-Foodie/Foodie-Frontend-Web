import React from 'react';
import {Button, Grid, TextField, Paper, Typography} from '@material-ui/core';
import {styles} from "../../styles/common";
import {Email, Lock} from "@material-ui/icons";
import PropTypes from "prop-types";
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';

const LOGIN_TEXT = 'LOGIN';
const EMAIL_PLACEHOLDER = "Email";
const PASSWORD_PLACEHOLDER = "Password";
const TITLE = "Plataforma de administración Foodie";

export class LoginView extends React.Component {
    static propTypes = {
        errors: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
        loading: PropTypes.bool,
    };

	constructor(props) {
		super(props);
		this.state = {userData: {}}
	}

	onChangeField = (field, value) => {
        this.setState({userData: {...this.state.userData, [field]: value}});
	}

    onLoginClick = () => {
        this.props.onLogin(this.state.userData);
    }

    render() {
      const {errors, loading} = this.props;

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
                                onChange={event => this.onChangeField("email", event.target.value)}
                                helperText={errors.email}
                                error={errors.email !== undefined}
                              />
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item style={styles.pd_full}>
                      <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                              <Lock/>
                          </Grid>
                          <Grid item>
                              <TextField
                                label={PASSWORD_PLACEHOLDER}
                                type={"password"}
                                onChange={event => this.onChangeField("password", event.target.value)}
                                helperText={errors.password}
                                error={errors.password !== undefined}
                              />
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item style={styles.pd_full} xs={12} >
                    <Button
                        variant="contained"
                        className={'login_btn'}
                        size={"large"}
                        onClick={this.onLoginClick}>
                      {loading ? <CircularProgress size={24} style={styles.main_color}/> : LOGIN_TEXT}
                    </Button>
                  </Grid>
                  <Grid item style={styles.pd_full}>
                    <FormHelperText style={styles.error}>{errors.general}</FormHelperText>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
);
  }
}
