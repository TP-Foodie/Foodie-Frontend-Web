import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import {LoginContainer} from "./app/components/auth/LoginContainer";
import {AuthLoadingContainer} from "./app/components/auth/AuthLoadingContainer";
import {LOGIN, PLACES, WELCOME, USERS} from "./app/navigation/routes";
import {WelcomeView} from "./app/components/welcome/WelcomeView";
import {PlacesContainer} from "./app/components/places/PlacesContainer";
import {UsersContainer} from "./app/components/users/UsersContainer";
import {UserDetailContainer} from "./app/components/users/UserDetailContainer";
import PrivateRoute from "./app/components/utils/PrivateRoute";
import 'typeface-roboto';
import { GeneralLayout } from './app/components/utils/GeneralLayout';

const routing = (
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

ReactDOM.render(routing, document.getElementById('root'));
