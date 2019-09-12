import React from "react";
import PropTypes from 'prop-types';
import httpResources from "../../http/httpResources";
import {UserDetailView} from "./UserDetailView";
import {handleError} from "../../handlers/handleError";

export class UserDetailContainer extends React.Component {
    static propTypes = {
        match: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.state = { user: {} };
    }

    updateUser = async () => {
        try {
            const data = {
                user: this.state.user
            }

            const {response} = await httpResources.updateUser(data.user.id,JSON.stringify(data.user));
            this.setState({ 
                user: response,
            })
        } catch (error) {
            handleError(error);
        }
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

    handleChange = (event) => {
        const {user} = {user: {...this.state.user, [event.target.id] : event.target.value}}
        this.setState({user});
    }
    
    render() {
        return (
            <div className={"container"}>
                <UserDetailView 
                        className={"user_detail"} 
                        user={this.state.user}
                        onSubmit={this.updateUser}
                        onChange={this.handleChange}/>
            </div>
        );
    }
}
