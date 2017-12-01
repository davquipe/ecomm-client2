import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import AppLayout from './app/Layout01'

import { BrowserRouter as Router } from 'react-router-dom'
//import { Route } from 'react-router-dom'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, pink } from 'material-ui/colors';


class App extends Component {
    componentWillMount() {
    }

    render() {

        const { dark } = this.props

        const theme = createMuiTheme({
            palette: {
                type: dark ? 'dark' : 'light', //type: dark ? 'dark' : 'light',
                primary: blue, // Purple and green play nicely together.
                secondary: pink,
            },
        })
        
        return (
            <MuiThemeProvider theme={theme}>
                <Router>

                    <AppLayout >
                    </AppLayout >
                </Router>
            </MuiThemeProvider>
        )
    }
}

App.propTypes = {
    dark: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => {
    return { dark: state.theme.dark }
}
export default connect(mapStateToProps, {

})(App)