import React, { useEffect, useState } from "react";
import RuleFormContainer from "./RuleFormContainer";
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess} from "../../redux/reducers/handlers";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { handleError } from "../../handlers/handleError";
import httpResources from "../../http/httpResources";
import {Parser} from "../../common/parser";

const RuleDetailsContainer = props => {
    const [rule, setRule] = useState(undefined);
    const {setLoading} = props;
    const ruleId = props.match.params.ruleId;

    useEffect(() => {
        async function fetchRule() {
            setLoading(true);
            try {
                const {data} = await httpResources.rule(ruleId);
                setRule(Parser.parseRule(data));
            } catch (error) {
                handleError(error)
            }
            setLoading(false);
        }
        fetchRule()
    }, [setLoading, setRule, ruleId]);

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