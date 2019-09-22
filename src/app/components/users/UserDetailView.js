import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";

export class UserDetailView extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            edit: false
        })
        this.handleChange = this.handleChange.bind(this);
    }
    static propTypes = {
        user: PropTypes.any.isRequired,
        onSubmit: PropTypes.func,
        onChange: PropTypes.func
    };

    handleChange(event){
        this.props.onChange(event)
    }

    getTextField(id, value, placeHolder){
        return (
            <TextField id={id}
                        value={value}
                        placeholder={placeHolder}
                        onChange={this.handleChange}
                        margin="dense"
                        disabled={!this.state.edit}
            /> 
        );
    }

    editModifierOnChange = () => {
        const editValue = this.state.edit
        this.setState({ 
            edit: !editValue,
        })
    }

    saveChanges = () => {
        this.props.onSubmit()
        this.setState({edit: false})
    }
    
    render(){
        const {id, name, last_name, type, email, phone} = this.props.user
        
        const styles = makeStyles({
            bigAvatar: {
                margin: 10,
                width: 60,
                height: 60,
              }
        })
    
        return(
            <Grid>
                <Grid
                    className={"container"}
                    container
                    direction="column">
                    <Paper className="user-detail">
                        <Grid container className={id}>
                            <Grid item xs={12} align="center">
                                <Grid item xs={5} align="center">
                                    <Avatar alt={name} src="" className={styles.bigAvatar} />
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("name", `${name}`, 'Nombre')}
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("last_name",`${last_name}`, 'Apellido')}
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("type", `${type}`, 'Tipo')}
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("email", `${email}`, 'Email')}
                                </Grid>
                                <Grid item xs={5} align="center">
                                    {this.getTextField("phone", `${phone}`, 'Telefono')}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button variant="contained" 
                                onClick={this.editModifierOnChange}>
                                    Editar
                        </Button>
                        <Button variant="contained" 
                                color="secondary"
                                onClick={this.saveChanges}>
                                    Guardar
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}