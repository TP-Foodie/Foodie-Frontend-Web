import React from 'react';
import RuleFormContainer from "../rules/RuleFormContainer";
import {connect} from 'react-redux';
import {setLoading} from "../../redux/reducers/loading";
import {handleSuccess, handleError} from "../../redux/reducers/handlers";

const BenefitFormContainer = props => (<RuleFormContainer {...props} benefit/>)

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

export default connect(mapStateToProps, mapDispatchToProps)(BenefitFormContainer);