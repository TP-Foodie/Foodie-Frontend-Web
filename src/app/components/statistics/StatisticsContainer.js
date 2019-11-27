import React, {useState, useEffect, useCallback} from 'react';
import {setLoading} from '../../redux/reducers/loading';
import {handleError} from '../../redux/reducers/handlers';
import { AdminGraph } from './AdminGraph';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Parser} from '../../common/parser';


export const StatisticsContainer = props => {
    const [data, setData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const {setLoading, handleError, fetchData} = props;

    const memoizedFetchData = useCallback(async (date = new Date()) => {        
        try {
            setLoading(true);
            const {data} = await fetchData(date);
            setData(Parser.parseDateForChart(data));
        } catch (error) {
            handleError(error);
        }
        setLoading(false);
    }, [fetchData, handleError, setLoading])

    useEffect(() => {
        memoizedFetchData()
    }, [memoizedFetchData]);

    const onChangeDate = date => {
        setSelectedDate(date);
        fetchData(date);
    }

    return (
        <AdminGraph 
            data={data} 
            title={props.chartTitle} 
            selectedDate={selectedDate} 
            onChangeDate={onChangeDate}
        />
    );
}

StatisticsContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired,
    fetchData: PropTypes.func.isRequired,
    chartTitle: PropTypes.string.isRequired,
}

const mapDistpatchToProps = {
    setLoading,
    handleError
}

export default connect(undefined, mapDistpatchToProps)(StatisticsContainer);