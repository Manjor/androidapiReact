import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../pages/Home/Home'
import DetailsPost from '../pages/DetailsPost/DetailsPost'
export default props =>
    <Switch>
        {/* Route of HomePage */}
        <Route exact path='/' component={Home}/>
        {/* Route of UserCrudPage */}
        <Route path='/detailspost' component={DetailsPost}/>
        {/*Any to Home */}
        <Redirect from='*' to='/'/>
    </Switch>