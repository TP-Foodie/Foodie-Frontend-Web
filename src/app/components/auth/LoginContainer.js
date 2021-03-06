import React from "react";
import {LoginView} from "./LoginView";
import httpResources from "../../http/httpResources";
import PropTypes from "prop-types";
import {WELCOME} from "../../navigation/routes";
import {TOKEN_NAME} from "../../common/constants";
import {LOGIN_RULES} from "../../common/rules";
import validate from "validate.js";
import {isLoggedIn} from "../../common/utils";

const GENERAL_ERROR = "Email y/o passwords incorrectos";

export class LoginContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {loading: false, errors: {}};
    }

    componentDidMount = () => {
        if (isLoggedIn()) {
            this.navigateToNext();
        }
    };

    navigateToNext = () => {
        this.props.history.push(WELCOME);
    };

    login = async (email, password) => {
        this.setState({loading: true});

        try {
            const {data} = await httpResources.login(email, password);
            localStorage.setItem(TOKEN_NAME, data.token);
            this.setState({loading: false});
            this.navigateToNext();
        } catch (error) {
            this.setState({
                errors: {...this.state.errors, general: GENERAL_ERROR},
                loading: false
            })
        }
    };

    onLoginClick = (userData) => {
        const errors = validate(userData, LOGIN_RULES);
        errors ? this.setState({errors: errors}) : this.login(userData.email, userData.password);
    };

    render() {
        const {errors, loading} = this.state;
        return <LoginView errors={errors} onLogin={this.onLoginClick} loading={loading}/>
    }
}
