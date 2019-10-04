import React from "react";
import PropTypes from "prop-types";

export const RulesListView = props => {
    return <h1>{props.rules[0]}</h1>;
}

RulesListView.propTypes = {
    rules: PropTypes.array.isRequired
}
