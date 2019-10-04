import React from "react";
import httpResources from "../../http/httpResources";
import {PlacesView} from "./PlacesView";
import {handleError} from "../../handlers/handleError";
import {NoContent} from "../utils/NoContent";
import {setLoading} from "../../redux/reducers/loading";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class PlacesContainer extends React.Component {
    static propTypes = {
        setLoading: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { places: [] };
    }

    componentDidMount = async () => {
        try {
            this.props.setLoading(true);
            const {data} = await httpResources.places();
            this.setState({places: data});
            this.props.setLoading(false);
        } catch (error) {
            handleError(error);
        }
    };

    render() {
        const {places} = this.state;

        return places.length > 0 ? <PlacesView className={"places_view"} places={places}/> : <NoContent/>;
    }
}

const mapDispatchToProps = {
    setLoading
};

export default connect(undefined, mapDispatchToProps)(PlacesContainer);
