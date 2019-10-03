import React from "react";
import {isLoggedIn} from "../../common/utils";
import {WELCOME, LOGIN} from "../../navigation/routes";
import PropTypes from "prop-types";

export class AuthLoadingContainer extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    componentDidMount = () => {
        const {history} = this.props;
        isLoggedIn() ? history.push(WELCOME) : history.push(LOGIN);
    }

    render() {
        return <div/>
    }
}
