import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";

export const RuleConsequenceForm = props => {
    const [valueType, setValueType] = useState(-1);
    const {consequence, errors, types, variables} = props;
    
    const onEditField = (field, value) => {
        let editedValue = value;
        if (field === "value") { 
            editedValue *= valueType;
        }

        props.onEditField(field, editedValue);
    }

    const renderValue = () => {
        return consequence.type === "PV" ? (
            <React.Fragment>
                <Grid item xs={2}>
                    <TextField 
                        type={"number"}
                        label={"Valor"}
                        fullWidth
                        variant="outlined"
                        value={consequence.value}
                        onChange={event => onEditField("value", event.target.value)}
                        helperText={errors.consequenceValue}
                        error={errors.consequenceValue !== undefined}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        select
                        label={"Unidad"}
                        fullWidth
                        variant="outlined"
                        value={consequence.variable}
                        onChange={event => onEditField("variable", event.target.value)}
                    >
                        {variables.map(variable => <MenuItem key={variable.value} value={variable.value}>{variable.name}</MenuItem>)}
                    </TextField>
                </Grid>
            </React.Fragment>
        ) : (
            <Grid item xs={6}>
                <TextField 
                    type={"number"}
                    fullWidth
                    variant="outlined"
                    value={Math.abs(consequence.value)}
                    onChange={event => onEditField("value", event.target.value)}
                    helperText={errors.consequenceValue}
                    error={errors.consequenceValue !== undefined}
                />
            </Grid>
        )
    }

    return (
        <Grid item>
            <Grid container direction="row" spacing={2} justify="center">
                <Grid item xs={3}>
                    <TextField 
                        select
                        fullWidth
                        variant="outlined"
                        value={valueType}
                        onChange={event => setValueType(event.target.value)}
                    >
                        <MenuItem value={-1}>Descuento</MenuItem>
                        <MenuItem value={1}>Recargo</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        select
                        fullWidth
                        variant="outlined"
                        value={consequence.type}
                        onChange={event => onEditField("type", event.target.value)}
                        helperText={errors.consequenceType}
                        error={errors.consequenceType !== undefined}
                    >
                        {types.map(type => <MenuItem key={type.value} value={type.value}>{type.name}</MenuItem>)}
                    </TextField>
                </Grid>
                {renderValue()}
            </Grid>
        </Grid>
    );
}

RuleConsequenceForm.propTypes = {
    consequence: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onEditField: PropTypes.func.isRequired,
    types: PropTypes.array.isRequired,
    variables: PropTypes.array.isRequired
}
