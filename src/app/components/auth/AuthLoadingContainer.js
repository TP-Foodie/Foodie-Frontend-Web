import React from "react";
import {TOKEN_NAME} from "../../common/constants";
import {WELCOME, LOGIN} from "../../navigation/routes";

export class AuthLoadingContainer extends React.Component {
    componentDidMount = () => {
        const {history} = this.props;

        const token = localStorage.getItem(TOKEN_NAME);
        token ? history.push(WELCOME) : history.push(LOGIN);
    }

    render() {
        return <div/>
    }
}
