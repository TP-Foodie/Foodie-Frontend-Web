import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import Button from "@material-ui/core/Button";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import {WelcomeView} from "../welcome/WelcomeView"
import {rowDetail} from "../welcome/WelcomeView"
import {USERS} from "../../navigation/routes";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import httpResources from "../../http/httpResources";
import {handleError} from "../../handlers/handleError";

export class UserDetailView extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            edit: false,
            _id: "",
            name: "",           
            role: "",
            email: "",
            phone: ""
        })
        this.handleChange = this.handleChange.bind(this);
    }
    static propTypes = {
        user: PropTypes.any.isRequired
    };

    handleChange(event){
        this.setState({ [event.target.id] : event.target.value });
    }

    getTextField(id, value, placeHolder){
        const value_in_state = this.state[id]
        const val = value_in_state === undefined ||value_in_state.trim() === "" ? value : value_in_state

        if (this.state.edit)
            return (
                <TextField id={id}
                value={val}
                placeholder={placeHolder}
                onChange={this.handleChange}
                margin="dense"
                disabled={false}/> 
            );
        else
            return (
                <TextField id={id}
                    value={val}
                    margin="dense" 
                    disabled={true} />
            )
    }

    setUserFields(user){
        this.setState({ 
            _id: user._id,
            name: user.name,
            role: user.role,
            email: user.email,
            phone: user.phone
        })
    }

    editModifierOnChange(){
        const {user} = this.props
        const edit_value = this.state.edit
        this.setUserFields(user)
        this.setState({ 
            edit: !edit_value,
        })
    }

    saveChanges = async () => {
        try {
            const user_data = {
                _id: this.state._id,
                name: this.state.name,
                role: this.state.role,
                email: this.state.email,
                phone: this.state.phone,
            }
            const data = {
                user: user_data
            }
            const {response} = await httpResources.update_user(user_data._id,JSON.stringify(data));
            this.setUserFields(response.user)
            this.setState({ 
                edit: false,
            })
        } catch (error) {
            handleError(error);
        }
    }
    
    render(){
        const {user} = this.props
        const name = user.name
        const role = user.role
        const email = user.email
        const phone = user.phone

        const styles = makeStyles({
            bigAvatar: {
                margin: 10,
                width: 60,
                height: 60,
              }
        })
    
        return(
            <Grid>
                <WelcomeView/>
                <Grid
                    className={"container"}
                    container
                    direction="column">
                    <Paper className="user-detail">
                        <Grid container className={user._id}>
                            <Grid item xs={12} align="center">
                                <Grid item xs={5} align="center">
                                    <Avatar alt={name} src="" className={styles.bigAvatar} />
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("name", `${name}`, 'Nombre')}
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("role", `${role}`, 'Rol')}
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("email", `${email}`, 'Email')}
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("phone", `${phone}`, 'Phone')}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button variant="contained" 
                                onClick={()=>{this.editModifierOnChange()}}>
                                    Editar
                                    </Button>
                        <Button variant="contained" 
                                color="secondary"
                                onClick={()=>{this.saveChanges()}}>
                                    Guardar
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export class UsersView extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    render() {
        const {users} = this.props;
        return(
            <Grid>
                <WelcomeView/>
                <Grid
                    className={"container"}
                    container
                    direction="column"
                    justify="center"
                    style={{minHeight: '100vh'}}>
                    <Grid item>
                        <Paper className={"users_list"}>
                            <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">Nombre y Apellido</TableCell>
                                <TableCell align="center">Rol</TableCell>
                                <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map(user => (
                                    <TableRow key={user._id} className={user.name}>
                                        <TableCell component="th" scope="row">
                                        {user._id}
                                        </TableCell>
                                        <TableCell align="right">{user.name}</TableCell>
                                        <TableCell align="right">{user.role}</TableCell>
                                        <TableCell align="right">{rowDetail(`${USERS}/${user._id}`)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}