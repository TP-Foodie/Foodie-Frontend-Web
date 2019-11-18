import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const AdminGraph = props => {
    return (
        <AreaChart width={400} height={400} data={props.data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="x" />
            <YAxis />
            <Area type="monotone" dataKey="y" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
        </AreaChart>
    );
}