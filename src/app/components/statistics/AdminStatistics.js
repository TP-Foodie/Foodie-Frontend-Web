import React from 'react'
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {setLoading} from '../../redux/reducers/loading';
import {handleError} from '../../redux/reducers/handlers';
import RegistrationsContainer from './RegistrationsContainer';
import { CompletedOrdersContainer } from './CompletedOrdersContainer';
import CancelledOrdersContainer from './CancelledOrdersContainer';

export const AdminStatistics = props => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <RegistrationsContainer {...props}/>
            </Grid>
            <Grid item xs={4}>
                <CompletedOrdersContainer {...props}/>
            </Grid>
            <Grid item xs={4}>
                <CancelledOrdersContainer {...props}/>
            </Grid>
        </Grid>
    )
}

const mapDistpatchToProps = {
    setLoading,
    handleError
}

export default connect(undefined, mapDistpatchToProps)(AdminStatistics);