import React, { useEffect, useState } from "react";
import RuleFormContainer from "./RuleFormContainer";
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess} from "../../redux/reducers/handlers";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {handleError} from "../../redux/reducers/handlers";
import httpResources from "../../http/httpResources";
import {Parser} from "../../common/parser";

const SUCCESS_MESSAGE = "Regla actualizada con exito!";
const SUCCESS_DELETE_MESSAGE = "Regla eliminada con exito!"

const RuleDetailsContainer = props => {
    const [rule, setRule] = useState(undefined);
    const {setLoading, handleSuccess, handleError} = props;
    const ruleId = props.match.params.ruleId;

    const handleDelete = async () => {
        setLoading(true);
        try {
            await httpResources.deleteRule(ruleId);
            handleSuccess(SUCCESS_DELETE_MESSAGE);
            props.history.goBack();
        } catch (error) {
            handleError(error);
        }
        setLoading(false);
    }

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
    }, [setLoading, setRule, ruleId, handleError]);

    return (
        <RuleFormContainer
            {...props}
            initialRule={rule}
            successMessage={SUCCESS_MESSAGE}
            handleDelete={handleDelete}
        />
    );
}

RuleDetailsContainer.propTypes = {
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    setLoading: PropTypes.func.isRequired,
    handleSuccess: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    handleError: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        loading: state.loading.loading,
    }
};

const mapDispatchToProps = {
    setLoading,
    handleSuccess,
    handleError
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleDetailsContainer);