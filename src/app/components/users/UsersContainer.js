import React from "react";
import PropTypes from 'prop-types';
import httpResources from "../../http/httpResources";
import {UsersView, UserDetailView} from "./UsersView";
import {handleError} from "../../handlers/handleError";

export class UserDetailContainer extends React.Component {
    static propTypes = {
        match: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.state = { user: {} };
    }

    componentDidMount = async () => {
        try {
            const param = this.props.match.params.userId
            const {data} = await httpResources.users(param);
            this.setState({user: data});
        } catch (error) {
            handleError(error);
        }
    };
    
    render() {
        return (
            <div className={"container"}>
                <UserDetailView className={"user_detail"} user={this.state.user}/>
            </div>
        );
    }
}

export class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount = async () => {
        try {
            const {data} = await httpResources.users();
            this.setState({users: data});
        } catch (error) {
            handleError(error);
        }
    };

    render() {
        return (
            <div className={"container"}>
                <UsersView className={"users_view"} users={this.state.users}/>
            </div>
        );
    }
}

