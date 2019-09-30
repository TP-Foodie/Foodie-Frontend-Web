import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import {LoginContainer} from "./app/components/auth/LoginContainer";
import {LOGIN, PLACES, WELCOME, USERS} from "./app/navigation/routes";
import {WelcomeView} from "./app/components/welcome/WelcomeView";
import {PlacesContainer} from "./app/components/places/PlacesContainer";
import {UsersContainer} from "./app/components/users/UsersContainer";
import {UserDetailContainer} from "./app/components/users/UserDetailContainer";
import 'typeface-roboto';

const routing = (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={LoginContainer} />
                <Route path={LOGIN} component={LoginContainer} />
                <Route path={WELCOME} component={WelcomeView} />
                <Route path={PLACES} component={PlacesContainer} />
                <Route path={USERS} component={UsersContainer} exact/>
                <Route path={`${USERS}/:userId`} component={UserDetailContainer} />
            </Switch>
        </Router>
    </div>
);

ReactDOM.render(routing, document.getElementById('root'));
