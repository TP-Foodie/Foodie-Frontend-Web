import React from "react";
import PropTypes from 'prop-types';
import httpResources from "../../http/httpResources";
import UserDetailView from "./UserDetailView";
import {handleError} from "../../handlers/handleError";
import { SuccessMessage } from "../utils/SuccessMessage";

export class UserDetailContainer extends React.Component {
    static propTypes = {
        match: PropTypes.any,
    };

    constructor(props) {
        super(props);
        this.state = { user: {}, showSuccess: false };
    }

    cleanFields(value){
        return value===undefined || value==null ? '' : value
    }

    updateUser = async () => {
        try {
            const data = {
                name: this.cleanFields(this.state.user.name),
                last_name: this.cleanFields(this.state.user.last_name),
                type: this.cleanFields(this.state.user.type),
                email: this.cleanFields(this.state.user.email),
                phone: this.cleanFields(this.state.user.phone),
            }
            await httpResources.updateUser(this.state.user.id, JSON.stringify(data));
            this.setState({showSuccess: true});
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
            <div>
                <UserDetailView
                    className={"user_detail"}
                    user={this.state.user}
                    onSubmit={this.updateUser}
                    onChange={this.handleChange}/>
                <SuccessMessage message={"Usuario actualizado con exito!"} show={this.state.showSuccess}/>
            </div>
        );
    }
}
