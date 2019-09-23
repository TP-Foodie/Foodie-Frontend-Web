import React from "react";
import httpResources from "../../http/httpResources";
import {PlacesView} from "./PlacesView";
import {handleError} from "../../handlers/handleError";
import {GeneralLayout} from "../welcome/GeneralLayout";

export class PlacesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { places: [], loading: false };
    }

    componentDidMount = async () => {
        try {
            this.setState({loading: true});
            const {data} = await httpResources.places();
            this.setState({places: data, loading: false});
        } catch (error) {
            handleError(error);
        }
    };

    render() {
        return (
            <GeneralLayout className={"container"} loading={this.state.loading}>
                <PlacesView className={"places_view"} places={this.state.places}/>
            </GeneralLayout>
        );
    }
}
