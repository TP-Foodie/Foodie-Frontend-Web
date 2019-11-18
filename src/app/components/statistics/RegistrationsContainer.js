import React, {useState, useEffect} from 'react';
import httpResources from '../../http/httpResources';
import {setLoading} from '../../redux/reducers/loading';
import {handleError} from '../../redux/reducers/handlers';
import { AdminGraph } from './AdminGraph';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {toDate} from '../../common/utils';

export const RegistrationsContainer = props => {
    const [users, setUsers] = useState([]);
    const {setLoading, handleError} = props;

    const prepareDateForChart = data => {
        return data.map(user => ({
            name: toDate(user.date),
            uv: user.count
        }))
    }

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true);
                const {data} = await httpResources.usersStatistics();
                setUsers(prepareDateForChart(data));
            } catch (error) {
                handleError(error);
            }
            setLoading(false);
        }
        fetchUsers()
    }, [setLoading, setUsers, handleError]);

    return <AdminGraph data={users}/>
}

RegistrationsContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired,
}

const mapDistpatchToProps = {
    setLoading,
    handleError
}

export default connect(undefined, mapDistpatchToProps)(RegistrationsContainer);