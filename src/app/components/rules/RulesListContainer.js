import React, {useEffect, useState} from "react";
import { RulesListView } from "./RulesListView";
import {setLoading} from "../../redux/reducers/loading";
import {connect} from "react-redux";
import httpResources from "../../http/httpResources";
import {handleError} from "../../handlers/handleError";
import PropTypes from "prop-types";

const RulesListContainer = props => {
    const [rules, setRules] = useState([]);
    const {setLoading} = props;

    useEffect(() => {
        async function fetch() {
            try {
                setLoading(true);
                const {data} = await httpResources.rules();
                setRules(data);
            } catch (error) {
                handleError(error);
            }
            setLoading(false);
        }
        fetch();
    }, [setLoading])

    return (
        <RulesListView rules={rules}/>
    );
}

RulesListContainer.propTypes = {
    setLoading: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    setLoading
};

export default connect(undefined, mapDispatchToProps)(RulesListContainer);