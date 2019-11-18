import React, {useState, useEffect} from 'react';
import httpResources from '../../http/httpResources';
import {setLoading} from '../../redux/reducers/loading';
import {handleError} from '../../redux/reducers/handlers';
import { AdminGraph } from './AdminGraph';
import { connect } from 'react-redux';

export const RegistrationsContainer = props => {
    const [users, setUsers] = useState([]);
    const {setLoading, handleError} = props;

    const prepareDataForGraph = (data) => {
        return data;
    }

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true);
                const {data} = await httpResources.users();
                setUsers(prepareDataForGraph(data));
            } catch (error) {
                handleError(error);
            }
            setLoading(false);
        }
        fetchUsers()
    }, [setLoading, setUsers, handleError]);

    return <AdminGraph/>
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