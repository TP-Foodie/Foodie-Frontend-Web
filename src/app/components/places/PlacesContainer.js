import React from "react";
import httpResources from "../../http/httpResources";

export class PlacesContainer extends React.Component {

    componentDidMount = () => {
        httpResources.places();
    };

    render() {
        return <div className={"container"}/>
    }
}