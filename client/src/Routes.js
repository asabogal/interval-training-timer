import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import App from './containers/App'
import CustomizeForm from './components/Timer/CustomizeForm'

export default () => {

 return (
   <BrowserRouter>
   <Switch>
   <Route exact path= '/' component={App}/>
   <Route path= '/new' component={CustomizeForm}/>
   </Switch>
   </BrowserRouter>
 )
}