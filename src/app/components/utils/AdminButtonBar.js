import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

export const AdminButtonBar = props => {
    const [showDialog, setShowDialog] = useState(false);

    const handleClose = () => {
        setShowDialog(false);
    }

    const handleOpen = () => {
        setShowDialog(true);
    }

    const handleAccept = () => {
        handleClose();
        props.handleDelete();
    }

    const canDelete = Boolean(props.handleDelete);
    return (
        <Grid container justify={"space-between"} direction={"row"} alignItems="flex-end" spacing={2} style={{padding: 10}}>
            <Grid item>
                <Button variant="contained" onClick={handleOpen} style={canDelete ? {backgroundColor: "red", color: "white"} : {}} disabled={!canDelete}>
                    ELIMINAR
                </Button>
            </Grid>
            <Grid item>
                <Grid container direction="row" spacing={2}>
                    <Grid item>
                        <Button variant="contained" onClick={props.handleBack}>
                            CANCELAR
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={props.handleSubmit}>
                            GUARDAR
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog
                open={showDialog}
                onClose={handleClose}
            >
                <DialogTitle>{"Esta seguro de eliminar?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esta operacion es irreversible y no podra recuperar la informacion eliminada
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAccept} color="secondary">
                        ACEPTAR
                    </Button>
                    <Button onClick={handleClose} color="secondary" autoFocus>
                        CANCELAR
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

AdminButtonBar.propTypes = {
    handleBack: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func,
}