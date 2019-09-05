import React from "react";
import httpResources from "../../http/httpResources";
import {PlacesView} from "./PlacesView";
import {handleError} from "../../handlers/handleError";

export class PlacesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { places: [] };
    }

    componentDidMount = async () => {
        try {
            const {data} = await httpResources.places();
            this.setState({places: data});
        } catch (error) {
            handleError(error);
        }
    };

    render() {
        return (
            <div className={"container"}>
                <PlacesView className={"places_view"} places={this.state.places}/>
            </div>
        );
    }
}