import React, {useEffect, useState} from "react";
import { RulesListView } from "../rules/RulesListView";
import {setLoading} from "../../redux/reducers/loading";
import {connect} from "react-redux";
import httpResources from "../../http/httpResources";
import {handleError} from "../../redux/reducers/handlers";
import PropTypes from "prop-types";

const BenfitsListContainer = props => {
    const [rules, setRules] = useState([]);
    const {setLoading, handleError} = props;

    useEffect(() => {
        async function fetch() {
            try {
                setLoading(true);
                const {data} = await httpResources.benefitRules();
                setRules(data);
            } catch (error) {
                handleError(error);
            }
            setLoading(false);
        }
        fetch();
    }, [setLoading, handleError])

    return (
        <RulesListView rules={rules} benefits/>
    );
}

BenfitsListContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    setLoading,
    handleError
};

export default connect(undefined, mapDispatchToProps)(BenfitsListContainer);