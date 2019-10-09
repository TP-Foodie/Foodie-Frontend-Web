import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';
import PropTypes from "prop-types";
import {hideSuccess} from "../../redux/reducers/handlers";
import {connect} from "react-redux";

export const SuccessMessage = props => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(props.show);    
    }, [props]);

    const onClose = () => {
        setOpen(false);
        props.hideSuccess();
    }

    return (
        <Snackbar open={open}>
            <SnackbarContent 
                style={{backgroundColor: green[600]}}
                message={
                    <span id="client-snackbar" style={{display: "flex", alignItems: "center"}}>
                        <CheckCircleIcon/>
                        {props.message}
                    </span>
                }
                action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />
        </Snackbar>
    );
}

SuccessMessage.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    hideSuccess: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    hideSuccess
}

export default connect(undefined, mapDispatchToProps)(SuccessMessage);