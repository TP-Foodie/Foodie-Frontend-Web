import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {LoginView} from "./app/components/auth/LoginView";
import {LOGIN, PLACES, WELCOME, USERS} from "./app/navigation/routes";
import {WelcomeView} from "./app/components/welcome/WelcomeView";
import {PlacesContainer} from "./app/components/places/PlacesContainer";
import {UsersContainer} from "./app/components/users/UsersContainer";
import {UserDetailContainer} from "./app/components/users/UserDetailContainer";
import 'typeface-roboto';

const routing = (
    <div>
        <Router>
            <div>
                <Route exact path="/" component={LoginView} />
                <Route path={LOGIN} component={LoginView} />
                <Route path={WELCOME} component={WelcomeView} />
                <Route path={PLACES} component={PlacesContainer} />
                <Route path={USERS} component={UsersContainer} exact/>
                <Route path={`${USERS}/:userId`} component={UserDetailContainer} />
            </div>
        </Router>
    </div>
);

ReactDOM.render(routing, document.getElementById('root'));
