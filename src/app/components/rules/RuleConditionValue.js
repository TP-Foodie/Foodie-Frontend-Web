import React from "react";
import {TextField, Grid} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import {DAYS_NAMES, DATE_FIELDS_TYPES, DAY_FIELDS_TYPES, TIME_FIELDS_TYPES, NUMERIC_FIELDS_TYPES, LOCALIZATION_FIELD_TYPES} from "../../common/constants";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
  } from '@material-ui/pickers';
  import DateFnsUtils from "@date-io/date-fns";

const RuleConditionValue = props => {
    const {error, onChange, initialValue} = props;

    const defaultField = (
        <TextField
            label={"Seleccione valor"}
            fullWidth
            variant="outlined"
            value={initialValue}
            onChange={event => onChange(event.target.value)}
            helperText={error ? error : null}
            error={Boolean(error)}
        />
    )

    const dayNameField = (
        <TextField
            select
            label={"Seleccione dia"}
            fullWidth
            variant="outlined"
            value={initialValue}
            onChange={event => onChange(event.target.value)}
            helperText={error ? error : null}
            error={Boolean(error)}
        >
            {DAYS_NAMES.map(day => <MenuItem key={day.value} value={day.value}>{day.name}</MenuItem>)}
        </TextField>
    );

    const dateField = (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                format="MM/dd/yyyy"
                label="Seleccione fecha"
                value={initialValue}
                onChange={onChange}
                fullWidth
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );

    const timeField = (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
                label="Seleccione una hora"
                inputVariant="outlined"
                value={initialValue}
                onChange={onChange}
                fullWidth
                KeyboardButtonProps={{
                    'aria-label': 'change time',
                }}
            />
        </MuiPickersUtilsProvider>
    );

    const numericField = (
        <TextField
            label={"Seleccione valor"}
            fullWidth
            variant="outlined"
            value={initialValue}
            onChange={event => onChange(event.target.value)}
            helperText={error ? error : null}
            error={Boolean(error)}
            type={"number"}
        />
    )

    const localizationField = (
        <Grid container direction="row" spacing={2}>
            <Grid item>
                <TextField
                    label={"latitud"}
                    fullWidth
                    variant="outlined"
                    value={initialValue}
                    onChange={event => onChange(event.target.value)}
                    helperText={error ? error : null}
                    error={Boolean(error)}
                    type={"number"}
                />
            </Grid>
            <Grid item>
                <TextField
                    label={"longitud"}
                    fullWidth
                    variant="outlined"
                    value={initialValue}
                    onChange={event => onChange(event.target.value)}
                    helperText={error ? error : null}
                    error={Boolean(error)}
                    type={"number"}
                />
            </Grid>
        </Grid>
    )

    const fieldsByType = [
        {types: DATE_FIELDS_TYPES, field: dateField},
        {types: DAY_FIELDS_TYPES, field:dayNameField},
        {types: TIME_FIELDS_TYPES, field: timeField},
        {types: NUMERIC_FIELDS_TYPES, field: numericField},
        {types: LOCALIZATION_FIELD_TYPES, field: localizationField},
        {types: [props.type], field: defaultField}
    ]

    return fieldsByType.find(fieldObj => fieldObj.types.some(type => type === props.type)).field;
}

RuleConditionValue.propTypes = {
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default RuleConditionValue