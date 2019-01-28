import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './containers/App'
import Timer from './containers/Timer'
import CustomizeForm from './components/Timer/CustomizeForm'
import ModalAbout from './containers/ModalAbout'

const AppRoutes = () => {

 return (
   <BrowserRouter>
    <Switch>
      <Route exact path= '/' component={App}/>
      <Route path= '/timer' component={Timer}/>
      <Route path= '/new' component={CustomizeForm}/>
      <Route path= '/about' component={ModalAbout}/>
    </Switch>
   </BrowserRouter>
 )
}

export default AppRoutes;