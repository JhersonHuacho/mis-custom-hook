import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={ HomePage } />          
            <Route exact path="/about" component={ AboutPage } />
            <Route exact path="/login" component={ LoginPage } />
            {/* <Route  component={ HomePage }/> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}
