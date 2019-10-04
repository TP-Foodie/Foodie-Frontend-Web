import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import {LoginContainer} from "./auth/LoginContainer";
import {AuthLoadingContainer} from "./auth/AuthLoadingContainer";
import {LOGIN, PLACES, WELCOME, USERS} from "../navigation/routes";
import {WelcomeView} from "./welcome/WelcomeView";
import {PlacesContainer} from "./places/PlacesContainer";
import {UsersContainer} from "./users/UsersContainer";
import {UserDetailContainer} from "./users/UserDetailContainer";
import PrivateRoute from "./utils/PrivateRoute";
import 'typeface-roboto';
import { GeneralLayout } from './utils/GeneralLayout';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <GeneralLayout>
                    <Route exact path="/" component={AuthLoadingContainer} />
                    <Route path={LOGIN} component={LoginContainer} />
                    <PrivateRoute path={WELCOME} component={WelcomeView} />
                    <PrivateRoute path={PLACES} component={PlacesContainer} />
                    <PrivateRoute path={USERS} component={UsersContainer} exact/>
                    <PrivateRoute path={`${USERS}/:userId`} component={UserDetailContainer} />
                </GeneralLayout>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
