import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import App from './app/components/App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import {LoginView} from "./app/components/auth/LoginView";
import {LOGIN, WELCOME} from "./app/navigation/routes";
import {WelcomeView} from "./app/components/welcome/WelcomeView";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path={LOGIN} component={LoginView} />
            <Route path={WELCOME} component={WelcomeView} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
