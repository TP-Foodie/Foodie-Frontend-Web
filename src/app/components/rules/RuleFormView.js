import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { TextField } from "@material-ui/core";
import { styles } from "../../styles/common";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import FormHelperText from '@material-ui/core/FormHelperText';
import { RuleConditionForm } from "./RuleConditionForm";
import { RuleConsequenceForm } from "./RuleConsequenceForm";
import {AdminButtonBar} from "../utils/AdminButtonBar"
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const RuleFormView = props => {
    const [consequence, setConsequence] = useState({type: "V", value: 0});
    const [conditions, setConditions] = useState([]);
    const [active, setActive] = useState(true);
    const [name, setName] = useState("");
    const [cost, setCost] = useState(0);
    const [redeemable, setRedeemable] = useState(false);
    const {initialData} = props;
    
    useEffect(() => {
        function initialize() {
            setName(initialData.name);
            setConditions(initialData.conditions);
            setConsequence(initialData.consequence);
            setActive(initialData.active);
            setRedeemable(initialData.redeemable || false);
            setCost(initialData.cost);
        }
        if (initialData) initialize();
    }, [initialData, setName, setConsequence, setConditions]);

    const renderDivider = title => {
        return <Grid item style={styles.divider}>
            <h2>{title}</h2>
        </Grid>
    };

    const addCondition = () => {
        setConditions([...conditions, {id: conditions.length + 1}]);
    }

    const removeCondition = conditionId => {
        setConditions(conditions.filter(condition => condition.id !== conditionId));
    };

    const handleBack = () => {
        props.history.goBack();
    }

    const handleSubmit = () => {
        props.handleSubmit({
            conditions: conditions,
            consequence,
            name,
            active,
            redeemable,
            cost
        });
    }

    const editCondition = (field, value, conditionId) => {
        const newConditions = conditions.map(condition => {
            return condition.id === conditionId ? {...condition, [field]: value} : condition;
        })
        setConditions(newConditions);
    }

    const editConsequence = (field, value) => {
        setConsequence({...consequence, [field]: value});
    }

    const {errors, operators, variables} = props;

    return (
        <Paper style={styles.container}>
            <Grid 
                className={"container"}
                container
                direction="column"
                justify="flex-start"
                style={{minHeight: '100vh'}}
                spacing={2}>
                <Grid item xs={12}>
                    <TextField 
                        label={"Nombre"}
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        helperText={errors.name}
                        error={errors.name !== undefined}
                    />
                </Grid>
                <Grid item>
                <FormControlLabel
                    control={
                        <Switch
                        checked={active}
                        onChange={() => setActive(!active)}
                        value={"Activa"}
                    />
                    }
                    label={props.benefit ? "Activo" : "Activa"}
                />
                </Grid>
                <React.Fragment>
                    {renderDivider("Condiciones")}

                    {
                        errors.conditions && 
                        <Grid item style={styles.pd_left}>
                            <FormHelperText style={styles.error}>{errors.conditions}</FormHelperText>
                        </Grid>
                    }

                    <RuleConditionForm 
                        errors={errors} 
                        operators={operators} 
                        variables={variables}
                        onEdit={editCondition}
                        onAdd={addCondition}
                        onRemove={removeCondition}
                        conditions={conditions}
                    />
                </React.Fragment>
                {props.benefit ? renderDivider("Beneficio") : renderDivider("Consecuencia")}
                <RuleConsequenceForm
                    benefit={props.benefit}
                    consequence={consequence}
                    errors={errors}
                    onEditField={editConsequence}
                    types={props.consequenceTypes}
                    variables={variables.filter(variable => conditions.some(condition => condition.variable === variable.value))}
                />
                <Grid container direction="row">
                    {
                        props.benefit && 
                        <Grid item>
                            <FormControlLabel
                                control={
                                <Checkbox
                                    checked={redeemable}
                                    onChange={() => setRedeemable(!redeemable)}
                                    color="secondary"
                                />
                                }
                                label="Beneficio Canjeable"
                            />
                        </Grid>
                    }
                    {
                        props.benefit && redeemable &&
                        <TextField 
                            label={"Costo"}
                            fullWidth
                            variant="outlined"
                            value={cost}
                            onChange={event => setCost(event.target.value.toString())}
                            type="number"
                        />
                    }
                </Grid>
            </Grid>
            <AdminButtonBar handleBack={handleBack} handleSubmit={handleSubmit} handleDelete={props.handleDelete}/>
        </Paper>
    );
}

RuleFormView.propTypes = {
    history: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    variables: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    consequenceTypes: PropTypes.array.isRequired,
    errors: PropTypes.object,
    initialData: PropTypes.object,
    benefit: PropTypes.bool,
};

export default withRouter(RuleFormView);
