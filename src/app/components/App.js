import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import {LoginContainer} from "./auth/LoginContainer";
import {AuthLoadingContainer} from "./auth/AuthLoadingContainer";
import {
  LOGIN, PLACES, WELCOME, USERS, RULES, RULE_CREATE, 
  RULE_EDIT, BALANCES, STATISTICS, SUBSCRIPTIONS, BENEFITS, BENEFIT_CREATE, BENEFIT_EDIT
} from "../navigation/routes";
import {WelcomeView} from "./welcome/WelcomeView";
import PlacesContainer from "./places/PlacesContainer";
import UsersContainer from "./users/UsersContainer";
import UserDetailContainer from "./users/UserDetailContainer";
import PrivateRoute from "./utils/PrivateRoute";
import 'typeface-roboto';
import GeneralLayout from './utils/GeneralLayout';
import RulesListContainer from './rules/RulesListContainer';
import RuleFormContainer from './rules/RuleFormContainer';
import RuleDetailsContainer from './rules/RuleDetailsContainer';
import BalanceListContainer from "./balance/BalanceListContainer";
import AdminStatistics from './statistics/AdminStatistics';
import SubscriptionListContainer from './subscriptions/ListContainer';
import BenefitsListContainer from '../components/benefits/ListContainer';
import BenefitsFormContainer from './benefits/FormContainer.js';
import BenefitsDetailsContainer from './benefits/DetailsContainer.js';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={AuthLoadingContainer}/>
                <Route path={LOGIN} component={LoginContainer} exact/>
                <GeneralLayout>
                    <PrivateRoute path={WELCOME} component={WelcomeView} exact/>
                    <PrivateRoute path={PLACES} component={PlacesContainer} exact/>
                    <PrivateRoute path={USERS} component={UsersContainer} exact/>
                    <PrivateRoute path={`${USERS}/:userId`} component={UserDetailContainer} exact/>
                    <PrivateRoute path={RULES} component={RulesListContainer} exact/>
                    <PrivateRoute path={RULE_CREATE} component={RuleFormContainer} exact/>
                    <PrivateRoute path={`${RULE_EDIT}/:ruleId`} component={RuleDetailsContainer} exact/>
                    <PrivateRoute path={BALANCES} component={BalanceListContainer} exact/>
                    <PrivateRoute path={STATISTICS} component={AdminStatistics} exact/>
                    <PrivateRoute path={SUBSCRIPTIONS} component={SubscriptionListContainer} exact/>
                    <PrivateRoute path={BENEFITS} component={BenefitsListContainer} exact/>
                    <PrivateRoute path={BENEFIT_CREATE} component={BenefitsFormContainer} exact/>
                    <PrivateRoute path={`${BENEFIT_EDIT}/:ruleId`} component={BenefitsDetailsContainer} exact/>
                </GeneralLayout>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
