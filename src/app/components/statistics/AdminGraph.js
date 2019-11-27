import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import { styles } from '../../styles/common';

export const AdminGraph = props => {
    return (
        <div>
            <div style={styles.adminGraphDatePicker}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/yyyy"
                        label="Seleccione Fecha"
                        value={props.selectedDate}
                        onChange={props.onChangeDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <AreaChart width={400} height={400} data={props.data}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="x"/>
                <YAxis />
                <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
                <Tooltip />
                <Legend content={<h3 style={styles.chartLegend}>{props.title}</h3>} align="center"/>
            </AreaChart>
        </div>
    );
};

AdminGraph.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
    selectedDate: PropTypes.object,
    onChangeDate: PropTypes.func
};
