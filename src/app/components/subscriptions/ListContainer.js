import React, {useEffect, useState} from 'react';
import {SubscriptionListView} from './ListView';
import {setLoading} from '../../redux/reducers/loading';
import {connect} from 'react-redux';
import {handleError} from '../../redux/reducers/handlers';
import httpResources from '../../http/httpResources';
import PropTypes from 'prop-types';

export const SubscriptionListContainer = props => {
    const [users, setUsers] = useState([]);
    const {setLoading, handleError} = props;

    useEffect(() => {
        async function fetch() {
            setLoading(true);
            try {
                const {data} = await httpResources.users();
                setUsers(data.users);
            } catch (error) {
                handleError(error);
            }
            setLoading(false);
        }
        fetch();
    }, [setLoading, handleError])

    return <SubscriptionListView users={users}/>;
}

SubscriptionListContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
    handleError: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    setLoading,
    handleError
}

export default connect(undefined, mapDispatchToProps)(SubscriptionListContainer);