import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './containers/App'
import Timer from './containers/Timer'
import ModalForm from './containers/ModalForm'
import ModalList from './containers/ModalList'
import About from './components/About'

const AppRoutes = () => {

 return (
   <BrowserRouter>
    <Switch>
      <Route exact path= '/' component={App}/>
      <Route path= '/timer' component={Timer}/>
      <Route exact path= '/workouts' component={ModalList}/>
      <Route exact path= '/workouts/new' component={ModalForm}/>
      <Route path= '/about' component={About}/>
    </Switch>
   </BrowserRouter>
 )
}

export default AppRoutes;