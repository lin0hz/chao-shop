import React, { Component, Suspense, lazy } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Login from './pages/login/login'
const Home = lazy(() => import('./pages/home/home'));


const App = () =>

   (
      <div style={{ 'height': '100%' }}>
         <HashRouter>
            <Suspense fallback={<div>Loading...</div>}>
               <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/home" render={() => {
                     let token = localStorage.getItem('chao_token');
                     if (token) {
                        return <Home />
                     } else {
                        return <Login />
                     }
                  }} />

                  <Redirect exact from="/" to="/login" />
               </Switch>
            </Suspense>
         </HashRouter>
      </div>



   )




export default App;
