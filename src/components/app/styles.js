const drawerWidth = 240;
const styles = theme => ({
    '@global': {
      html: {
        boxSizing: 'border-box',
      },
      '*, *:before, *:after': {
        boxSizing: 'inherit',
      },
      body: {
        //margin: 0,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      },
      '#nprogress': {
        pointerEvents: 'none',
        '& .bar': {
          position: 'fixed',
          background: '#000',
          borderRadius: 1,
          zIndex: theme.zIndex.tooltip,
          top: 0,
          left: 0,
          width: '100%',
          height: 2,
        },
        '& dd, & dt': {
          position: 'absolute',
          top: 0,
          height: 2,
          boxShadow: '#000 1px 0 6px 1px',
          borderRadius: '100%',
          animation: 'nprogress-pulse 2s ease-out 0s infinite',
        },
        '& dd': {
          opacity: 0.6,
          width: 20,
          right: 0,
          clip: 'rect(-6px,22px,14px,10px)',
        },
        '& dt': {
          opacity: 0.6,
          width: 180,
          right: -80,
          clip: 'rect(-6px,90px,14px,-6px)',
        },
      },
      '@keyframes nprogress-pulse': {
        '30%': {
          opacity: 0.6,
        },
        '60%': {
          opacity: 0,
        },
        to: {
          opacity: 0.6,
        },
      },
  
    },
  
    root: {
  
    },
    appFrame: {
      display: 'flex',
      alignItems: 'stretch',
      width: '100%',
    },
    appBar: {
      left: 'auto',
      right: 0,
      transition: theme.transitions.create('width'),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      //position: 'relative',
  
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      height: 56,
      [theme.breakpoints.up('sm')]: {
        height: 64,
      },
    },
    content: {
      width: '100%',
      //marginLeft: -drawerWidth,
      marginLeft: 0,
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: 'calc(100% - 56px)',
      marginTop: 56,
      [theme.breakpoints.up('sm')]: {
        content: {
          height: 'calc(100% - 64px)',
          marginTop: 64,
        },
      },
    },
    contentShift: {
      //marginLeft: 0,
      marginLeft: drawerWidth,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    grow: {
      flex: '1 1 auto',
    },
  
  
  
  
  
  });
/*
const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        marginTop: theme.spacing.unit * 0,
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        width: '100%',
        marginLeft: -drawerWidth,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    contentShift: {
        marginLeft: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});


*/
export default styles;