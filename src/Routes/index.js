import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RouteConfig from '../Configure/RouteConfig'
import Home from './Home/index'
import Services from './Services/index'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={RouteConfig.LANDING} component={Home} />
                    <Route exact path={RouteConfig.SERVICES} component={Services} />

                </Switch>
            </BrowserRouter>
        </>
    )
}
export default AppRoutes;