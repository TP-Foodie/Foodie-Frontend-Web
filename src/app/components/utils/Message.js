import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/Error';
import { green, red } from '@material-ui/core/colors';
import PropTypes from "prop-types";
import {hideMessage} from "../../redux/reducers/handlers";
import {connect} from "react-redux";

export const Message = props => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(props.show);    
    }, [props]);

    const onClose = () => {
        setOpen(false);
        props.hideMessage();
    }

    const backgroundStyle = {backgroundColor: props.error ? red[600] : green[600]};

    return (
        <Snackbar open={open}>
            <SnackbarContent 
                style={backgroundStyle}
                message={
                    <span id="client-snackbar" style={{display: "flex", alignItems: "center"}}>
                        {props.error ? <ErrorIcon/> : <CheckCircleIcon/>}
                        <div style={{paddingLeft: 10}}>
                            {props.message}
                        </div>
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

Message.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string,
    hideMessage: PropTypes.func.isRequired,
    error: PropTypes.bool
}

const mapDispatchToProps = {
    hideMessage
}

export default connect(undefined, mapDispatchToProps)(Message);