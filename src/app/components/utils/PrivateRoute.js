import React from "react";
import { Route, Redirect } from "react-router-dom";
import {isLoggedIn} from "../../common/utils";
import PropTypes from "prop-types";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => isLoggedIn() ? <Component {...props} /> : <Redirect to="/" />}
        />
    );
}

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}

export default PrivateRoute;
