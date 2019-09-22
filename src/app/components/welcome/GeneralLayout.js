import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {Menu} from "@material-ui/icons";
import {styles} from "../../styles/common";
import Avatar from "@material-ui/core/Avatar";

const TITLE = "Plataforma de administración Foodie";

export class GeneralLayout extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={styles.main_gradient}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu/>
                        </IconButton>
                        <Typography variant="h6" style={styles.flex_grow}>
                            {TITLE}
                        </Typography>
                        <IconButton edge={"end"}>
                            <Avatar>A</Avatar>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}