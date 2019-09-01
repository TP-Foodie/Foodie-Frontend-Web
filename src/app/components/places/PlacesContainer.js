import React from "react";
import httpResources from "../../http/httpResources";
import {PlacesView} from "./PlacesView";

export class PlacesContainer extends React.Component {

    constructor() {
        super();
        this.state = { places: [] };
    }

    componentDidMount = async () => {
        const {data} = await httpResources.places();
        this.setState({places: data});
    };

    render() {
        return (
            <div className={"container"}>
                <PlacesView className={"places_view"} places={this.state.places}/>
            </div>
        );
    }
}