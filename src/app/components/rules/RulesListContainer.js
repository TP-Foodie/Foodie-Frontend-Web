import React, {useEffect, useState} from "react";
import { RulesListView } from "./RulesListView";
import {setLoading} from "../../redux/reducers/loading";
import {connect} from "react-redux";
import {httpResources} from "../../http/httpResources";
import {handleError} from "../../handlers/handleError";
import PropTypes from "prop-types";

const RulesListContainer = props => {
    const [rules, setRules] = useState([]);

    useEffect(async () => {
        try {
            props.setLoading(true);
            const {data} = await httpResources.rules();
            setRules(data);
            props.setLoading(false);
        } catch (error) {
            handleError(error);
        }
    })

    return (
        <RulesListView rules={rules}/>
    );
}

RulesListContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    setLoading
};

export default connect(undefined, mapDispatchToProps)(RulesListContainer);