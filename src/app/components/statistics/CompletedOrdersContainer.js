import React from 'react';
import httpResources from '../../http/httpResources';
import {setLoading} from '../../redux/reducers/loading';
import {handleError} from '../../redux/reducers/handlers';
import { connect } from 'react-redux';
import StatisticsContainer from './StatisticsContainer';

export const CompletedOrdersContainer = props => (
    <StatisticsContainer 
        fetchData={httpResources.ordersCompletedStatistics} 
        chartTitle="Cantidad de pedidos completados por fecha" 
        {...props}
    />
);

const mapDistpatchToProps = {
    setLoading,
    handleError
}

export default connect(undefined, mapDistpatchToProps)(CompletedOrdersContainer);