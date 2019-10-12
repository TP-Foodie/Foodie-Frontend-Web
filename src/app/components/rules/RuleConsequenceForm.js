import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";

export const RuleConsequenceForm = props => {
    const [valueType, setValueType] = useState(-1);
    const {consequence, errors, types} = props;
    
    const onEditField = (field, value) => {
        let editedValue = value;
        if (field === "value") { 
            editedValue *= valueType;
        }

        props.onEditField(field, editedValue);
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
                <Grid item xs={6}>
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
            </Grid>
        </Grid>
    );
}

RuleConsequenceForm.propTypes = {
    consequence: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onEditField: PropTypes.func.isRequired,
    types: PropTypes.array.isRequired,
}