import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from "@material-ui/core";
import { styles } from "../../styles/common";
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import FormHelperText from '@material-ui/core/FormHelperText';
import { RuleConditionForm } from "./RuleConditionForm";

export const RuleFormView = props => {
    const [consequenceType, setConsequenceType] = useState("V");
    const [consequenceValue, setConsequenceValue] = useState(0);
    const [consequenceValueType, setConsequenceValueType] = useState("-");
    const [conditions, setConditions] = useState([]);
    const [name, setName] = useState("");

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
            consequence: {
                consequenceType, 
                consequenceValue, 
                consequenceValueType
            },
            name: name
        });
    }

    const editCondition = (field, value, conditionId) => {
        const newConditions = conditions.map(condition => {
            return condition.id === conditionId ? {...condition, [field]: value} : condition;
        })
        setConditions(newConditions);
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
                {renderDivider("Consecuencia")}
                <Grid item>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={3}>
                            <TextField 
                                select
                                fullWidth
                                variant="outlined"
                                value={consequenceValueType}
                                onChange={event => setConsequenceValueType(event.target.value)}
                                
                            >
                                <MenuItem value={"-"}>Descuento</MenuItem>
                                <MenuItem value={"+"}>Recargo</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                select
                                fullWidth
                                variant="outlined"
                                value={consequenceType}
                                onChange={event => setConsequenceType(event.target.value)}
                                helperText={errors.consequenceType}
                                error={errors.consequenceType !== undefined}
                            >
                                {props.consequenceTypes.map(type => <MenuItem key={type.value} value={type.value}>{type.name}</MenuItem>)}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField 
                                type={"number"}
                                label={"Valor"}
                                fullWidth
                                variant="outlined"
                                value={consequenceValue}
                                onChange={event => setConsequenceValue(event.target.value)}
                                helperText={errors.consequenceValue}
                                error={errors.consequenceValue !== undefined}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify={"flex-end"} direction={"row"} alignItems="flex-end" spacing={2} style={styles.pd_full_sm}>
                    <Grid item>
                        <Button variant="contained" onClick={handleBack}>
                            CANCELAR
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={handleSubmit}>
                            GUARDAR
                        </Button>
                    </Grid>
                </Grid>
        </Paper>
    );
}

RuleFormView.propTypes = {
    history: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    variables: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    consequenceTypes: PropTypes.array.isRequired,
    errors: PropTypes.object
};

export default withRouter(RuleFormView);