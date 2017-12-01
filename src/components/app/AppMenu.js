import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Menu from './Menu'

const styles = theme => ({
    //estilos para el Menu
    nav: {
        padding: 0,
    },

    //estilos para el MenuItem
    navToggleTitleButton: {
        // borderRadius: 0,


        //justifyContent: 'flex-start',
        //justifyContent: 'flex-end',
        textTransform: 'none',
        width: '100%',
        //minWidth: 360,
        // display: 'inline-flex',
        // justifyContent: 'space-between',
        // transition: theme.transitions.create('background-color', {
        //  duration: theme.transitions.duration.shortest,
        // }),


        alignItems: 'left',
        justifyContent: 'left !important;',


    },
    navToggle: {
        ...theme.typography.body2,
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0,


    },
    navToggleActive: {
        ...theme.typography.body,
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0,
        //background: '#E0E0E0;',
        background: theme.palette.background.appBar,
  

    },
    
    navLinkButton: {
        color: theme.palette.text.secondary,

        textDecoration: 'none',
    },

    navToggleLink: {
        paddingLeft: theme.spacing.unit * 4,

    },
    navToggleLinkActive: {
        paddingLeft: theme.spacing.unit * 4,
        background: '#9E9E9E;',
        color: theme.palette.text.primary,

    },

    navLink: {
        paddingLeft: theme.spacing.unit * 2,
    },
    navLinkActive: {
        paddingLeft: theme.spacing.unit * 2,
        background: '#9E9E9E;',
        color: theme.palette.text.primary,


    },

})


/*
navLink: {
        fontWeight: theme.typography.fontWeightRegular,
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,
    },
*/

class AppMenu extends Component {
    render() {
        const { menus, onRequestClose, classes } = this.props
        //const { classes } = this.props
        // {renderNavItems(props, context.pages, context.activePage)}
        // {renderNavItems(this.props, pages, pages[0])}
        //console.log("menu" + JSON.stringify(this.props))
        return (
            <Menu menus={menus} classes={classes}
                onRequestClose={onRequestClose}>
                Loading...
              </Menu>
        )
    }
}
/*
                <ul className={classes.ul}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/abouts">About</Link></li>
                    <li><Link to="/shoelaces">Shoelaces</Link></li>

                    <li><Link to="/counters">counters</Link></li>
                    <li><Link to="/users">users</Link></li>
                    <li><Link to="/ecomms">ecomms</Link></li>
                </ul>
*/

AppMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    menus: PropTypes.array.isRequired,
}

export default withStyles(styles)(AppMenu)