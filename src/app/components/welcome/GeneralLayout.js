import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={styles.main_gradient}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
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
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
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
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {props.children}
            </main>
        </div>
    );
};

GeneralLayout.propTypes = {
	children: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
	loading: PropTypes.bool
};