import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import PropTypes from 'prop-types';

export const AdminGraph = props => {
    return (
        <AreaChart width={400} height={400} data={props.data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="x"><Label value="Fecha" position="bottom"/></XAxis>
            <YAxis><Label value="Cantidad" position="left" /></YAxis>
            <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
            <Legend content={<h3>{props.title}</h3>}/>
        </AreaChart>
    );
};

AdminGraph.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
};
