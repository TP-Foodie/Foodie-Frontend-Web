import React, {useState} from "react";
import RuleFormView from "./RuleFormView";
import { validate } from "validate.js";
import { CONDITION_RULES, CONSEQUENCE_RULES, RULE_RULES } from "../../common/rules";

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

    const uploadChanges = () => {

    }

    const handleSubmit = values => {
        let errors = {};
        
        values.conditions.forEach(condition => {
            errors[condition.id] = validate(condition, CONDITION_RULES);
        });

        errors = {...errors, ...validate(values, RULE_RULES)}

        console.log(errors, values);

        setErrors(errors);
    };

    return <RuleFormView 
        handleSubmit={handleSubmit} 
        variables={variables} 
        operators={operators} 
        consequenceTypes={consequenceTypes} 
        errors={errors}
    />
}

export default RuleFormContainer;