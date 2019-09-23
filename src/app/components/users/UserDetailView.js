import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {styles} from "../../styles/common";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';

const FIELDS = {
    "name": "Nombre",
    "last_name": "Apellido",
     "type": "Tipo",
     "email": "Email",
     "phone": "Telefono"
};

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

    renderField = field => {
        return (
            <Grid item xs key={field}>
                <TextField
                    id={field}
                    value={this.props.user[field] || ""}
                    label={FIELDS[field]}
                    onChange={this.handleChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
            </Grid>
        );
    };

    render(){
        const {id, name, last_name, type, email, phone} = this.props.user

        return(
            <Paper className="user-detail" style={styles.user_details_cont} elevation={5}>
                <Grid container direction={"column"} justify={"center"} alignItems={"stretch"} style={styles.mg_full}>
                    <Grid item align="center">
                        <Avatar style={styles.bigAvatar}>{name ? name.charAt(0) + last_name.charAt(0) : ""}</Avatar>
                    </Grid>

                    {
                        Object.keys(FIELDS).map(field => this.renderField(field))
                    }

                    <Grid container spacing={2} justify={"flex-end"} style={styles.pd_full}>
                        <Grid item>
                            <Button variant="contained" color="secondary" onClick={this.saveChanges}>
                                GUARDAR
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>



            // <Grid
            //     className={"container"}
            //     container
            //     direction="column">
            //     <Grid item>
            //         <Paper className="user-detail" style={styles.user_details_cont}>
            //             <Grid container className={id} spacing={5}>
            //                 <Grid item xs={12} align="center">
            //                     <Grid item xs={5} align="center">
            //                         <Avatar alt={name} src="" className={styles.bigAvatar} />
            //                     </Grid>
            //                     <Grid item xs={5} align="center">
            //                         {this.getTextField("name", `${name}`, 'Nombre')}
            //                     </Grid>
            //                     <Grid item xs={5} align="center">
            //                         {this.getTextField("last_name",`${last_name}`, 'Apellido')}
            //                     </Grid>
            //                     <Grid item xs={5} align="center">
            //                         {this.getTextField("type", `${type}`, 'Tipo')}
            //                     </Grid>
            //                     <Grid item xs={5} align="center">
            //                         {this.getTextField("email", `${email}`, 'Email')}
            //                     </Grid>
            //                     <Grid item xs={5} align="center">
            //                         {this.getTextField("phone", `${phone}`, 'Telefono')}
            //                     </Grid>
            //                 </Grid>
            //             </Grid>
            //             <Grid container spacing={2} justify={"flex-end"}>
            //                 <Grid item>
            //                     <Button variant="contained"onClick={this.editModifierOnChange}>
            //                         Editar
            //                     </Button>
            //                 </Grid>
            //                 <Grid item>
            //                     <Button variant="contained"
            //                             color="secondary"
            //                             onClick={this.saveChanges}>
            //                                 Guardar
            //                     </Button>
            //                 </Grid>
            //             </Grid>
            //         </Paper>
            //     </Grid>
            // </Grid>
        );
    }
}
