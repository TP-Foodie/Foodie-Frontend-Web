import React, {useState, useEffect} from "react";
import {BalanceListView} from "./BalanceListView";
import httpResources from "../../http/httpResources";
import {handleError} from "../../redux/reducers/handlers";
import PropTypes from "prop-types";
import {setLoading} from "../../redux/reducers/loading";
import {connect} from "react-redux";
import { Parser } from "../../common/parser";

export const BalanceListContainer = props => {
    const [users, setUsers] = useState([]);
    const {setLoading} = props;

    useEffect(() => {
        async function fetch() {
            try {
                setLoading(true);
                const {data} = await httpResources.users();
                setUsers(data.users);
                setLoading(false);
            } catch (error) {
                handleError(error);
            }
        }
        fetch();
    }, [setLoading, setUsers]);

    const onUpdateBalance = async (valueToAdd, userId) => {
        const value = valueToAdd + (users.find(user => user.id === userId).balance || 0); 
        try {
            setLoading(true);
            await httpResources.updateUser(userId, Parser.buildUpdateBalanceRequest(value));
            const newUserList = users.map(user => {
                if (user.id === userId) return {
                    ...user,
                    balance: value
                }
                return user;
            })
            setUsers(newUserList);
        } catch {
            handleError();
        }
        setLoading(false);
    }

    return (
        <BalanceListView users={users} onUpdateBalance={onUpdateBalance}/>
    );
};

BalanceListContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    setLoading
};

export default connect(undefined, mapDispatchToProps)(BalanceListContainer);
