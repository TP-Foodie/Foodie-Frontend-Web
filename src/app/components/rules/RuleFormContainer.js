import React, {useState, useEffect} from "react";
import RuleFormView from "./RuleFormView";
import { validate } from "validate.js";
import { CONDITION_RULES, RULE_RULES } from "../../common/rules";
import {connect} from "react-redux";
import {setLoading} from "../../redux/reducers/loading";
import {handleError} from "../../handlers/handleError";
import httpResources from "../../http/httpResources";
import {Parser} from "../../common/parser";

const RuleFormContainer = () => {
    const [errors, setErrors] = useState({});
    const [variables, setVariables] = useState([]);
    const [operators, setOperators] = useState([]);
    const [consequenceTypes, setConsequenceTypes] = useState([]);

    useEffect(() => {
        async function fetchData() {
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
        }
        fetchData();
    }, [setVariables, setOperators, setConsequenceTypes]);

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