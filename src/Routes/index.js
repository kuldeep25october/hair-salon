import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RouteConfig from '../Configure/RouteConfig'
import Home from './Home/index'
import Services from './Services/index'
import Stylists from './Stylists/index'
import AboutUs from './About Us/index'
import Contact from './Contact/index'


const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={RouteConfig.LANDING} component={Home} />
                    <Route exact path={RouteConfig.SERVICES} component={Services} />
                    <Route exact path={RouteConfig.STYLISTS} component={Stylists} />
                    <Route exact path={RouteConfig.ABOUT} component={AboutUs} />
                    <Route exact path={RouteConfig.CONTACT} component={Contact} />

                </Switch>
            </BrowserRouter>
        </>
    )
}
export default AppRoutes;