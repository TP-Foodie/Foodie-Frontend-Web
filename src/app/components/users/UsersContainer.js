import React from "react";
import httpResources from "../../http/httpResources";
import {UsersView} from "./UsersView";
import {handleError} from "../../redux/reducers/handlers";
import {setLoading} from "../../redux/reducers/loading";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class UsersContainer extends React.Component {
    static propTypes = {
        setLoading: PropTypes.func.isRequired,
        handleError: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { users: []};
    }

    componentDidMount = async () => {
		try {
			this.props.setLoading(true);
            const {data} = await httpResources.users();
            this.setState({users: data.users});
            this.props.setLoading(false);
        } catch (error) {
            this.props.handleError(error);
        }
    };

    render() {
        return (
            <UsersView 
                className={"users_view"} 
                users={this.state.users}/>
        );
    }
}

const mapDispatchToProps = {
    setLoading,
    handleError,
};

export default connect(undefined, mapDispatchToProps)(UsersContainer);
