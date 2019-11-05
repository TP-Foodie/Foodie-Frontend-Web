import React from "react";
import PropTypes from 'prop-types';
import httpResources from "../../http/httpResources";
import UserDetailView from "./UserDetailView";
import {handleError} from "../../redux/reducers/handlers";
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess} from "../../redux/reducers/handlers";
import {connect} from "react-redux";

const SUCCESS_MESSAGE = "Usuario actualizado con exito!";

export class UserDetailContainer extends React.Component {
    static propTypes = {
        match: PropTypes.any,
    };

    constructor(props) {
        super(props);
        this.state = { user: {} };
    }

    cleanFields(value) {
        return value===undefined || value==null ? '' : value
    }

    updateUser = async () => {
        this.props.setLoading(true);
        try {
            const data = {
                name: this.cleanFields(this.state.user.name),
                last_name: this.cleanFields(this.state.user.last_name),
                type: this.cleanFields(this.state.user.type),
                email: this.cleanFields(this.state.user.email),
                phone: this.cleanFields(this.state.user.phone),
            }
            await httpResources.updateUser(this.state.user.id, JSON.stringify(data));
            this.props.handleSuccess(SUCCESS_MESSAGE);
            this.props.history.goBack();
        } catch (error) {
            this.props.handleError(error);
        }
        this.props.setLoading(false);
    }

    componentDidMount = async () => {
        try {
            const param = this.props.match.params.userId
            const {data} = await httpResources.users(param);
            this.setState({user: data});
        } catch (error) {
            this.props.handleError(error);
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
            </div>
        );
    }
}

UserDetailContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
    handleSuccess: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    handleError: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    setLoading,
    handleSuccess,
    handleError,
}

export default connect(undefined, mapDispatchToProps)(UserDetailContainer)