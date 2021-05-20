import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RouteConfig from '../Configure/RouteConfig'
import Home from './Home/index'
import Services from './Services/index'
import Stylists from './Stylists/index'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={RouteConfig.LANDING} component={Home} />
                    <Route exact path={RouteConfig.SERVICES} component={Services} />
                    <Route exact path={RouteConfig.STYLISTS} component={Stylists} />


                </Switch>
            </BrowserRouter>
        </>
    )
}
export default AppRoutes;