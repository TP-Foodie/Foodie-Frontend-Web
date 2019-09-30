import React from "react";
import {isLoggedIn} from "../../common/utils";
import {WELCOME, LOGIN} from "../../navigation/routes";

export class AuthLoadingContainer extends React.Component {
    componentDidMount = () => {
        const {history} = this.props;
        isLoggedIn() ? history.push(WELCOME) : history.push(LOGIN);
    }

    render() {
        return <div/>
    }
}
