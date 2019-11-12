import React, {useEffect, useState} from 'react';
import {SubscriptionListView} from './ListView';
import {setLoading} from '../../redux/reducers/loading';
import {connect} from 'react-redux';
import {handleError} from '../../redux/reducers/handlers';
import httpResources from '../../http/httpResources';
import PropTypes from 'prop-types';
import { Parser } from '../../common/parser';
import { userSubscriptions } from '../../common/constants';

export const SubscriptionListContainer = props => {
    const [users, setUsers] = useState([]);
    const {setLoading, handleError} = props;

    useEffect(() => {
        async function fetch() {
            setLoading(true);
            try {
                const {data} = await httpResources.users();
                setUsers(Parser.parseUsers(data));
            } catch (error) {
                handleError(error);
            }
            setLoading(false);
        }
        fetch();
    }, [setLoading, handleError])

    const updateSubscription = async (userId, subscription) => {
        setLoading(true);
        try {
            await httpResources.updateUser(userId, Parser.buildSubscriptionObj(subscription));
            setUsers(users.map(user => user.id === userId ? {...user, subscription: subscription} : user));
        } catch (error) {
            handleError(error);
        }
        setLoading(false);
    } 

    const onUpgrade = async (userId) => {
        updateSubscription(userId, userSubscriptions.PREMIUM);
    };

    const onCancel = async (userId) => {
        updateSubscription(userId, userSubscriptions.FLAT);
    }

    return <SubscriptionListView users={users} onUpgrade={onUpgrade} onCancel={onCancel} />;
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