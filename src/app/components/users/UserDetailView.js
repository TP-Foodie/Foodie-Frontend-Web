import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {styles} from "../../styles/common";
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";

const FIELDS = {
    "name": "Nombre",
    "last_name": "Apellido",
     "type": "Tipo",
     "email": "Email",
     "phone": "Telefono"
};

export class UserDetailView extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            edit: false
        });
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
        const editValue = this.state.edit;
        this.setState({
            edit: !editValue,
        })
    };

    saveChanges = () => {
        this.props.onSubmit();
        this.setState({edit: false})
    };

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
        const {name, last_name} = this.props.user

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
        );
    }
}
