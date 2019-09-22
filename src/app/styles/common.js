const DRAWER_WIDTH = 240

export const styles = {
    pd_full: {
        padding: 20
    },

    email_input: {
        marginTop: 10,
        paddingTop: 20
    },

    label: {
        floatingLabelFocusStyle: {
            color: "#E3678A",
        }
    },

    flex_grow: {
        flexGrow: 1
    },

    pd_full_sm: {
        padding: 10
    },

    login_title: {
        background: 'linear-gradient(to bottom, #F3916D, #E3678A)',
        padding: 20,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },

    main_gradient: {
        background: 'linear-gradient(to bottom, #F3916D, #E3678A)',
    },

    login_box: {
        backgroundColor: "#FFFFFF"
    },

    login_container: {
        backgroundColor: "#e8eeee",
        minHeight: '100vh'
    },

    heading: {
        color: "#FFFFFF"
    },
    
    generalLayoutStyles: theme => ({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${240}px)`,
            marginLeft: DRAWER_WIDTH,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: DRAWER_WIDTH,
            flexShrink: 0,
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: -DRAWER_WIDTH,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
    })
};

