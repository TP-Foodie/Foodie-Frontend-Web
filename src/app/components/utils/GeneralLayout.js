import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {styles} from "../../styles/common";
import {Map, Person} from "@material-ui/icons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import LinearProgress from "@material-ui/core/LinearProgress";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import {PLACES, USERS} from "../../navigation/routes";
import {Link} from "react-router-dom";

const useStyles = makeStyles(styles.generalLayoutStyles);
const TITLE = "Plataforma de administración Foodie";
const MODULES = {
    'Usuarios': <Person/>,
    'Lugares': <Map/>
};

const ROUTES_BY_MODULES = {
    'Lugares': PLACES,
    'Usuarios': USERS
};

export const GeneralLayout = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={classes.appBar}
                style={styles.main_gradient}
            >
                <Toolbar>
                    <Typography variant="h6" style={styles.flex_grow}>
                        {TITLE}
                    </Typography>
                    <IconButton edge={"end"}>
                        <Avatar>A</Avatar>
                    </IconButton>
				</Toolbar>
				{
					props.loading &&
					<LinearProgress />
				}
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    {Object.keys(MODULES).map(moduleName => (
                        <ListItem button key={moduleName} component={Link} to={ROUTES_BY_MODULES[moduleName]}>
                            <ListItemIcon>{MODULES[moduleName]}</ListItemIcon>
                            <ListItemText primary={moduleName} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={classes.content}
            >
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
};

GeneralLayout.propTypes = {
	children: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
	loading: PropTypes.bool
};
