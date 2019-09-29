import React from "react";
import httpResources from "../../http/httpResources";
import {UsersView} from "./UsersView";
import {handleError} from "../../handlers/handleError";
import {GeneralLayout} from "../utils/GeneralLayout";

export class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [], loading: false };
    }

    componentDidMount = async () => {
		try {
			this.setState({ loading: true });
            const {data} = await httpResources.users();
            this.setState({users: data.users, loading: false});
        } catch (error) {
            handleError(error);
        }
    };

    render() {
        return (
			<GeneralLayout className={"container"} loading={this.state.loading}>
                <UsersView 
                    className={"users_view"} 
                    users={this.state.users}/>
            </GeneralLayout>
        );
    }
}

