import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MenuItem from './MenuItem';
//import List from 'material-ui/List';
import { pageToTitle } from 'react-router-dom-ext'

import {
    withRouter,
} from 'react-router-dom'
//import compose from 'recompose/compose';



//https://reacttraining.com/react-router/web/api/Route/children-func

function renderNavItems(props, pages, activePage, isChildren = false) {
    let navItems = null;
    if (pages && pages.length) {
        // eslint-disable-next-line no-use-before-define
        //console.log("pages: "+JSON.stringify(pages))
        //console.log(" ini---- ")
        navItems = pages.reduce(reduceChildRoutes.bind(null, props, activePage, isChildren), [])
        //console.log("----end ")
    }
    return <ul className={props.classes.nav}>{navItems}</ul>
}

function reduceChildRoutes(props, activePage, isChildren, items, childPage, index) {
    if (childPage.routes) {
        isChildren = true
    }
    // console.log("isChildren: "+isChildren)
    //console.log("childPage.routes: "+JSON.stringify(childPage.routes))
    if ( (!childPage.replace) &&  childPage.routes && childPage.routes.length > 1) {
        const openImmediately = activePage.pathname.indexOf(childPage.path) !== -1 || false
        //console.log("childPage.routes: "+JSON.stringify(childPage.routes))
        //console.log("_________________ " )
        //console.log("childPage: "+JSON.stringify(childPage) )
        isChildren = true
        items.push(
            <MenuItem
                key={index}
                openImmediately={openImmediately}
                title={pageToTitle(childPage)}
                icon={childPage.icon}
                novisible={childPage.novisible}
                classes={props.classes}
                
            >
                {renderNavItems(props, childPage.routes, activePage, isChildren)}
            </MenuItem>,
        )
    } else

            if (childPage.title !== false) {
                childPage = childPage.routes && childPage.routes.length === 1 ? childPage.routes[0] : childPage
                //console.log("childPage else: "+JSON.stringify(childPage) )
                items.push(
                    <MenuItem
                        key={index}
                        title={pageToTitle(childPage)}
                        icon={childPage.icon}
                        path={childPage.path}
                        replace={childPage.replace}
                        onClick={props.onRequestClose}
                        isChildren={isChildren}
                        novisible={childPage.novisible}
                        classes={props.classes}

                    />,
                );
            }
    return items;
}



class Menu extends Component {
    render() {
        const { menus } = this.props
        //console.log("menu" + JSON.stringify(this.props))
        return (
            <div>
                {renderNavItems(this.props, menus, this.props.location)}
            </div>
        )
    }
}


Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    menus: PropTypes.array.isRequired,
}

export default (withRouter(Menu))


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
    /*
    if (childPage.routes_crud && childPage.routes_crud.length > 1) {
        //console.log("childPage.routes_crud: "+JSON.stringify(childPage.routes_crud))
        //childPage.routes_crud.map()

        childPage.routes_crud.forEach(element => {
            console.log("element: " + JSON.stringify(element.path))
            
            items.push(
                
                <MenuItem
                    key={i}
                    title={pageToTitle(element)}
                    href={element.path}
                    novisible={true}
                />,
            );
            i = i + 1

        }, this);
    }*/

        /*
        if ((childPage.replace)) {//&& !(childPage.routes.length > 1)
            console.log("childPage.routes_crud: " + JSON.stringify(childPage.routes))
            childPage =
                childPage.routes && childPage.routes.length === 1 ? childPage.routes[0] : childPage
            //console.log("childPage else: "+JSON.stringify(childPage) )
            items.push(
                <MenuItem
                    key={index}
                    title={pageToTitle(childPage)}
                    icon={childPage.icon}
                    href={childPage.path}
                    replace={childPage.replace}
                    onClick={props.onRequestClose}
                    isChildren={isChildren}
                    novisible={childPage.novisible}
                    classes={props.classes}
                />,
            );

        } else*/




        /*

        const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact, replace }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        let mito = to
        console.log('mito: ' + mito)
        if (replace) {
            mito = replace
        }
        return <div className={match ? 'active' : ''}>
            {match ? '> ' : ''}<Link to={mito} >{label}</Link>
        </div>
    }} />
)
*/