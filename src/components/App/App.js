import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from '../AppRouter/AppRouter'
import { CssBaseline } from '@material-ui/core'
import Navbar from '../Navbar/Navbar'

const App = () => {
    return (
        <Router>
            <CssBaseline>
                <Navbar />
                <AppRouter />
            </CssBaseline>
        </Router>
    )
}

export default App
