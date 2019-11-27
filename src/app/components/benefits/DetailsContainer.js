import React from 'react';
import {connect} from 'react-redux';
import RuleDetailsContainer from '../rules/RuleDetailsContainer';
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess, handleError} from "../../redux/reducers/handlers";

const BenefitDetailsContainer = props => (<RuleDetailsContainer {...props} benefit />);

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

export default connect(mapStateToProps, mapDispatchToProps)(BenefitDetailsContainer);