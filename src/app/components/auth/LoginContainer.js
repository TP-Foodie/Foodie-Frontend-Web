import React from "react";
import {LoginView} from "./LoginView";
import httpResources from "../../http/httpResources";
import {handleError} from "../../handlers/handleError";
import PropTypes from "prop-types";
import {WELCOME} from "../../navigation/routes";
import {TOKEN_NAME} from "../../common/constants";

export class LoginContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {loading: false, userData: {}};
    }

    onLogin = () => {
        const {email, password} = this.state.userData;

        this.setState({loading: true});

        try {
            const {data} = httpResources.login(email, password);
            localStorage.set(TOKEN_NAME, data.token);
            this.props.history.push(WELCOME);
        } catch (error) {
            handleError(error)
        }

        this.setState({loading: false});
    };



    render() {
        return <LoginView/>
    }
}