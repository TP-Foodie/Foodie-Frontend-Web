import React from "react";
import httpResources from "../../http/httpResources";
import {PlacesView} from "./PlacesView";
import {handleError} from "../../handlers/handleError";
import {GeneralLayout} from "../welcome/GeneralLayout";
import {NoContent} from "../utils/NoContent";

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
        const {loading, places} = this.state;

        return (
            <GeneralLayout className={"container"} loading={loading}>
                {
                     places.length > 0 ?
                     <PlacesView className={"places_view"} places={places}/> :
                     <NoContent/>
                }
            </GeneralLayout>
        );
    }
}
