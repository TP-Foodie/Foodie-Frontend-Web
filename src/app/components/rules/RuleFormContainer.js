import React, {useState} from "react";
import RuleFormView from "./RuleFormView";
import { validate } from "validate.js";
import { CONDITION_RULES, RULE_RULES } from "../../common/rules";
import {connect} from "react-redux";
import {setLoading} from "../../redux/reducers/loading";
import {handleError} from "../../handlers/handleError";
import httpResources from "../../http/httpResources";

const RuleFormContainer = () => {
    const [errors, setErrors] = useState({});

    const variables = [
        {value: "OD", name: "Dia del pedido"},
        {value: "UR", name: "Reputacion del usuario"}
    ]

    const operators = [
        {value: "GTE", name: "Mayor o igual a"},
        {value: "LT", name: "Menor a"}
    ]

    const consequenceTypes = [
        {value: "P", name: "%"},
        {value: "V", name: "$"}
    ]

    const uploadChanges = async values => {
        try {
            setLoading(true);
            const {data} = await httpResources.addRule(values);
            // TODO: set new rule
        } catch (error) {
            handleError(error)
        }
    }

    const handleSubmit = values => {
        let errors = {};
        
        values.conditions.forEach(condition => {
            const error = validate(condition, CONDITION_RULES)
            if (error ) {
                errors[condition.id] = error;
            }
        });

        errors = {...errors, ...validate(values, RULE_RULES)}
        setErrors(errors);

        if (!Object.keys(errors).length) uploadChanges(values);
    };

    return <RuleFormView 
        handleSubmit={handleSubmit} 
        variables={variables} 
        operators={operators} 
        consequenceTypes={consequenceTypes} 
        errors={errors}
    />
}

const mapStateToProps = state => {
    return {
        loading: state.loading.loading,
    }
};

const mapDispatchToProps = {
    setLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleFormContainer);