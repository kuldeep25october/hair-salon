import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home/index'
import RouteConfig from '../Configure/RouteConfig'

const AppRoutes = () => {
    return(
        <>
            <BrowserRouter>
                <Switch>
                     <Route exact path={RouteConfig.LANDING} component={Home} />
                  
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default AppRoutes;