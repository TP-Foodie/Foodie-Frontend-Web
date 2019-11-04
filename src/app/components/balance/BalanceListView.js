import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import PropTypes from "prop-types";
import {AddCircle, RemoveCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const DEFAULT_BALANCE = 0;
const POSITIVE = 1;
const NEGATIVE = -1;

export const BalanceListView = props => {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [currentUser, setCurrentUser] = useState();
    const [value, setValue] = useState(0);
    const [valueSign, setValueSign] = useState(1);

    const handleClose = () => {
        setShowDialog(false);
    }

    const onOpenDialog = (userId) => {
        setShowDialog(true);
        setCurrentUser(userId);
    }

    const openAddDialog = (userId) => {
        onOpenDialog(userId);
        setDialogTitle('Ingrese la cantidad a depositar');
        setValueSign(POSITIVE);
    }

    const openRemoveDialog = (userId) => {
        onOpenDialog(userId);
        setDialogTitle('Ingrese la cantidad a debitar');
        setValueSign(NEGATIVE);
    }

    const onUpdate = () => {   
        props.onUpdateBalance(valueSign * value, currentUser);
        setShowDialog(false);
    }

    return (
        <Grid
            className={"container"}
            container
            direction="column"
            justify="flex-start"
            style={{minHeight: '100vh'}}>
            <Grid item>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Nombre y Apellido</TableCell>
                                <TableCell align="center">Balance</TableCell>
                                <TableCell align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.users.map(user => (
                                <TableRow key={user.id} className={user.name}>
                                    <TableCell align="center">{user.name}</TableCell>
                                    <TableCell align="center">{user.balance || DEFAULT_BALANCE}</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={() => openAddDialog(user.id)}>
                                            <AddCircle style={{color: "green"}}/>
                                        </IconButton>
                                        <IconButton onClick={() => openRemoveDialog(user.id)}>
                                            <RemoveCircle color={"error"}/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
            <Grid item>
            <Dialog open={showDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
                <DialogContent>
                <OutlinedInput
                    autoFocus
                    variant={"outlined"}
                    label="Cantidad"
                    type="number"
                    fullWidth
                    onChange={(event) => setValue(parseInt(event.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} variant="contained">
                    Cancelar
                </Button>
                <Button onClick={onUpdate} color={"secondary"} variant="contained">
                    Actualizar
                </Button>
                </DialogActions>
            </Dialog>
            </Grid>
        </Grid>
    );
};

BalanceListView.propTypes = {
    users: PropTypes.array.isRequired,
    onUpdateBalance: PropTypes.func.isRequired,
};
