import * as React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { MainPage } from './Pages'

export default function App() {
    const AppWrapper = () => {
        return useRoutes([
            { path: "/", element: <MainPage/> }
        ])
    }

    return (
        <div>
            <Router>
                <AppWrapper/>
            </Router>
        </div>
    )
}
