import React, {useState, useEffect} from "react";
import RuleFormView from "./RuleFormView";
import { validate } from "validate.js";
import { CONDITION_RULES, RULE_RULES, BENEFIT_RULES } from "../../common/rules";
import {connect} from "react-redux";
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess} from "../../redux/reducers/handlers";
import {handleError} from "../../redux/reducers/handlers";
import httpResources from "../../http/httpResources";
import {Parser} from "../../common/parser";
import PropTypes from "prop-types";

const SUCCESS_MESSAGE = "Regla creada con exito!";

const RuleFormContainer = props => {
    const [errors, setErrors] = useState({});
    const [variables, setVariables] = useState([]);
    const [operators, setOperators] = useState([]);
    const [consequenceTypes, setConsequenceTypes] = useState([]);
    const {setLoading, handleError} = props;

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const variablesResponse = await  httpResources.rulesData("variables");
                const operatorsResponse = await httpResources.rulesData("operators");
                const consequenceTypesResponse = await httpResources.rulesData("consequence_types");

                setVariables(Parser.parseRuleVariables(variablesResponse.data));
                setOperators(Parser.parseRuleOperators(operatorsResponse.data));
                setConsequenceTypes(Parser.parseRuleConsequenceTypes(consequenceTypesResponse.data));
            } catch (error) {
                handleError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [setVariables, setOperators, setConsequenceTypes, setLoading, handleError]);

    const uploadChanges = async values => {
        props.setLoading(true);
        try {
            props.initialRule ? await httpResources.updateRule(values, props.initialRule.id) : await httpResources.addRule(values);
            props.handleSuccess(props.successMessage || SUCCESS_MESSAGE);
            props.history.goBack();
        } catch (error) {
            handleError(error)
        }
        props.setLoading(false);
    }

    const handleSubmit = values => {
        let errors = {};
        
        if (!props.benefit) {
            values.conditions.forEach(condition => {
                const error = validate(condition, CONDITION_RULES)
                if (error ) {
                    errors[condition.id] = error;
                }
            });
        } else {
            values['benefit'] = true;
        }

        errors = {...errors, ...validate(values, props.benefit ? BENEFIT_RULES : RULE_RULES)}
        setErrors(errors);

        if (!Object.keys(errors).length) uploadChanges(values);
    };

    return <RuleFormView
        handleSubmit={handleSubmit} 
        variables={variables} 
        operators={operators} 
        consequenceTypes={consequenceTypes} 
        errors={errors}
        initialData={props.initialRule}
        handleDelete={props.handleDelete}
        benefit={props.benefit}
    />
}

RuleFormContainer.propTypes = {
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    setLoading: PropTypes.func.isRequired,
    handleSuccess: PropTypes.func.isRequired,
    handleDelete: PropTypes.func,
    initialRule: PropTypes.object,
    successMessage: PropTypes.string,
    handleError: PropTypes.func.isRequired,
    benefit: PropTypes.bool,
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

export default connect(mapStateToProps, mapDispatchToProps)(RuleFormContainer);