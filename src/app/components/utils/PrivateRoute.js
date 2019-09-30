import React from "react";
import { Route, Redirect } from "react-router-dom";
import {TOKEN_NAME} from "../../common/constants";

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem(TOKEN_NAME);

    return (
        <Route
            {...rest}
            render={props => token ? <Component {...props} /> : <Redirect to="/" />}
        />
    );
}

export default PrivateRoute;
