import React, { useEffect, useState } from "react";
import RuleFormContainer from "./RuleFormContainer";
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess} from "../../redux/reducers/handlers";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {handleError} from "../../redux/reducers/handlers";
import httpResources from "../../http/httpResources";
import {Parser} from "../../common/parser";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const SUCCESS_MESSAGE = "Regla actualizada con exito!";
const SUCCESS_DELETE_MESSAGE = "Regla eliminada con exito!"

const RuleDetailsContainer = props => {
    const [rule, setRule] = useState(undefined);
    const [versions, setVersions] = useState([]);
    const [currentVersion, setCurrentVersion] = useState(undefined);
    const {setLoading} = props;
    const ruleId = props.match.params.ruleId;

    const handleDelete = async () => {
        setLoading(true);
        try {
            await httpResources.deleteRule(ruleId);
            handleSuccess(SUCCESS_DELETE_MESSAGE);
            props.history.goBack();
        } catch (error) {
            handleError(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        async function fetchRule() {
            setLoading(true);
            try {
                const {data} = await httpResources.ruleHistory(ruleId);
                const rule = Parser.parseRule(data.rule)
                setRule(rule);
                setVersions([...data.versions.map(version => Parser.parseRule(version)), rule]);
                setCurrentVersion(data.versions.length);
            } catch (error) {
                handleError(error)
            }
            setLoading(false);
        }
        fetchRule()
    }, [setLoading, setRule, ruleId, setVersions, handleError]);

    const handleTabChange = (event, newValue) => {
        setCurrentVersion(newValue);
        setRule(versions[newValue]);
    }

    return (
        <Grid container justify="center" direction="row">
            <Grid item xs={2}>
                <Paper style={{marginTop: 20}}>
                    <Tabs
                        style={{height: 500}}
                        variant="scrollable"
                        orientation="vertical"
                        value={currentVersion}
                        onChange={handleTabChange}
                        centered
                        >
                            {versions.slice(0, -1).map((version, index) => <Tab label={`${"Version"} ${index + 1}`}/>)}
                            <Tab label="Version Actual" />
                    </Tabs>
                </Paper>
                
            </Grid>
            <Grid item xs={10}>
                <RuleFormContainer
                    {...props}
                    initialRule={rule}
                    successMessage={SUCCESS_MESSAGE}
                    handleDelete={handleDelete}
                />
            </Grid>
        </Grid>
    );
}

RuleDetailsContainer.propTypes = {
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    setLoading: PropTypes.func.isRequired,
    handleSuccess: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    handleError: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        loading: state.loading.loading,
    }
};

const mapDispatchToProps = {
    setLoading,
    handleSuccess,
    handleError
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleDetailsContainer);