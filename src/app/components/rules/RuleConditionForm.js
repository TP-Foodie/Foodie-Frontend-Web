import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, IconButton, Button } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import { Add, Delete } from "@material-ui/icons";
import Grow from '@material-ui/core/Grow';
import PropTypes from "prop-types";
import RuleConditionValue from "./RuleConditionValue";

export const RuleConditionForm = props => {
    const {errors, conditions, onEdit, onRemove, onAdd} = props;

    return (
        <Grid item>
            <Grid container direction="column" justify="flex-start" spacing={2}>
            {
                conditions.map(condition => <Grid item key={condition.id}> 
                    <Grow in={true}>
                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={3}>
                                <TextField
                                    select
                                    label={"Seleccione variable"}
                                    fullWidth
                                    variant="outlined"
                                    value={conditions.find(current => current.id === condition.id).variable || ""}
                                    onChange={event => onEdit("variable", event.target.value, condition.id)}
                                    helperText={errors[condition.id] ? errors[condition.id].variable : null}
                                    error={errors[condition.id] ? errors[condition.id].variable !== undefined : false}
                                >
                                    {props.variables.map(variable => <MenuItem key={variable.value} value={variable.value}>{variable.name}</MenuItem>)}
                                </TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    select
                                    label={"Seleccione operador"}
                                    fullWidth
                                    variant="outlined"
                                    value={conditions.find(current => current.id === condition.id).operator || ""}
                                    onChange={event => onEdit("operator", event.target.value, condition.id)}
                                    helperText={errors[condition.id] ? errors[condition.id].operator : null}
                                    error={errors[condition.id] ? errors[condition.id].operator !== undefined : false}
                                >
                                    {props.operators.map(operator => <MenuItem key={operator.value} value={operator.value}>{operator.name}</MenuItem>)}
                                </TextField>
                            </Grid>
                            <Grid item xs={5}>
                                <RuleConditionValue
                                    error={errors[condition.id] ? errors[condition.id].value : null}
                                    onChange={value => onEdit("value", value, condition.id)}
                                    initialValue={conditions.find(current => current.id === condition.id).value}
                                    type={condition.variable}
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton onClick={() => onRemove(condition.id)}>
                                    <Delete color="error"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grow>
                </Grid>)
            }
            <Grid item>
                <Button onClick={onAdd}>
                    <Grid container direction="row" alignItems="center">
                        <Add style={{color: "green"}}/>
                        <p>{"Agregar condicion"}</p>
                    </Grid>
                </Button>
            </Grid>
        </Grid>
    </Grid>
    );
}

RuleConditionForm.propTypes = {
    variables: PropTypes.array.isRequired,
    operators: PropTypes.array.isRequired,
    errors: PropTypes.object.isRequired,
    conditions: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}