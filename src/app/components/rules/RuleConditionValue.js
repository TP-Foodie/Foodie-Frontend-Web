import React from "react";
import {TextField} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import {DAYS_NAMES, DATE_FIELDS_TYPES, DAY_FIELDS_TYPES, TIME_FIELDS_TYPES, NUMERIC_FIELDS_TYPES, PAYMENT_FIELDS, PAYMENT_OPTIONS} from "../../common/constants";
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
            label={"Escriba una valor"}
            fullWidth
            variant="outlined"
            value={initialValue}
            onChange={event => onChange(event.target.value.toLowerCase())}
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
            label={"Escriba un valor"}
            fullWidth
            variant="outlined"
            value={initialValue}
            onChange={event => onChange(event.target.value)}
            helperText={error ? error : null}
            error={Boolean(error)}
            type={"number"}
        />
    )

    const paymentField = (
        <TextField
            select
            label={"Seleccione metodo de pago"}
            fullWidth
            variant="outlined"
            value={initialValue}
            onChange={event => onChange(event.target.value)}
            helperText={error ? error : null}
            error={Boolean(error)}
        >
            {PAYMENT_OPTIONS.map(method => <MenuItem key={method.value} value={method.value}>{method.name}</MenuItem>)}
        </TextField>
    );

    const fieldsByType = [
        {types: DATE_FIELDS_TYPES, field: dateField},
        {types: DAY_FIELDS_TYPES, field:dayNameField},
        {types: TIME_FIELDS_TYPES, field: timeField},
        {types: NUMERIC_FIELDS_TYPES, field: numericField},
        {types: PAYMENT_FIELDS, field: paymentField},
        {types: [props.type], field: defaultField},
    ]

    return fieldsByType.find(fieldObj => fieldObj.types.some(type => type === props.type)).field;
}

RuleConditionValue.propTypes = {
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string,
    type: PropTypes.string
}

export default RuleConditionValue