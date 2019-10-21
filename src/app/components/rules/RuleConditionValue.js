import React from "react";
import {TextField} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from "prop-types";
import {DAYS_NAMES} from "../../common/constants";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
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
            onChange={onChange}
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
            onChange={onChange}
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
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );

    return dateField;
}

RuleConditionValue.propTypes = {
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    initialValue: PropTypes.string
}

export default RuleConditionValue