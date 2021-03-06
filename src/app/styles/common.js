const DRAWER_WIDTH = 240

export const styles = {
    pd_full: {
        padding: 20
    },

    pd_right_sm: {
        paddingRight: 10
    },

    pd_left: {
        paddingLeft: 20
    },

    email_input: {
        marginTop: 10,
        paddingTop: 20,
    },

    error: {
        color: "#FF0000"
    },

    label: {
        floatingLabelFocusStyle: {
            color: "#E3678A",
        }
    },

    adminGraphDatePicker: {
        textAlign: "center",
        marginRight: 90,
        paddingBottom: 10
    },

    chartLegend: {
        marginLeft: 50
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

    main_color: {
        color: "#E3678A"
    },

    create_fab: {
        backgroundColor: "#5e79ff",
        position: "fixed",
        bottom: 1,
        right: 1,
        margin: 20
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
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: DRAWER_WIDTH,
            flexShrink: 0,
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        toolbar: theme.mixins.toolbar,
    }),

    no_content: {
        color: "#c9c9c9"
	},

	largeIcon: {
		width: 160,
		height: 160,
	},

    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },

    user_details_cont: {
        margin: 10,
        padding: 10
    },

    container: {
        margin: 20,
        padding: 20
    },

    divider: {
        backgroundColor: "#328ca8",
        color: "white",
        marginTop: 20,
        marginBottom: 20,
        marginRight: 8,
        marginLeft: 8,
        paddingLeft: 15,
    },
};
