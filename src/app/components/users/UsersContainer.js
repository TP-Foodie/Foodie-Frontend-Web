import React from "react";
import httpResources from "../../http/httpResources";
import {UsersView} from "./UsersView";
import {handleError} from "../../handlers/handleError";

export class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount = async () => {
        try {
            const {data} = await httpResources.users();
            this.setState({users: data.users});
        } catch (error) {
            handleError(error);
        }
    };

    render() {
        return (
            <div className={"container"}>
                <UsersView 
                    className={"users_view"} 
                    users={this.state.users}/>
            </div>
        );
    }
}

