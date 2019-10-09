import React, { useEffect, useState } from "react";
import RuleFormContainer from "./RuleFormContainer";
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess} from "../../redux/reducers/handlers";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { handleError } from "../../handlers/handleError";
import httpResources from "../../http/httpResources";

const RuleDetailsContainer = props => {
    const [rule, setRule] = useState(undefined);

    useEffect(() => {
        async function fetchRule() {
            props.setLoading(true);
            try {
                const {data} = await httpResources.rule(props.match.params.ruleId);
                setRule(data);
            } catch (error) {
                handleError(error)
            }
            props.setLoading(false);
        }
        fetchRule()
    }, [props.setLoading, setRule]);

    return (
        <RuleFormContainer
            {...props}
            initialRule={rule}
        />
    );
}

RuleDetailsContainer.propTypes = {
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    setLoading: PropTypes.func.isRequired,
    handleSuccess: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        loading: state.loading.loading,
    }
};

const mapDispatchToProps = {
    setLoading,
    handleSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleDetailsContainer);