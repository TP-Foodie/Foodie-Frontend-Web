import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import App from './app/components/App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {LoginView} from "./app/components/auth/LoginView";
import {LOGIN, PLACES, WELCOME} from "./app/navigation/routes";
import {WelcomeView} from "./app/components/welcome/WelcomeView";
import {PlacesContainer} from "./app/components/places/PlacesContainer";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path={LOGIN} component={LoginView} />
            <Route path={WELCOME} component={WelcomeView} />
            <Route path={PLACES} component={PlacesContainer} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
