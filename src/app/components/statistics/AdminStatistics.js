import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {setLoading} from '../../redux/reducers/loading';
import {handleError} from '../../redux/reducers/handlers';
import RegistrationsContainer from './RegistrationsContainer';
import { CompletedOrdersContainer } from './CompletedOrdersContainer';

export const AdminStatistics = props => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <RegistrationsContainer {...props}/>
            </Grid>
            <Grid item xs={6}>
                <CompletedOrdersContainer {...props}/>
            </Grid>
        </Grid>
    )
}

const mapDistpatchToProps = {
    setLoading,
    handleError
}

export default connect(undefined, mapDistpatchToProps)(AdminStatistics);