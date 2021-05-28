import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Login from "./components/Login/Login";
import Registration from './components/Registration/Registartion';
import Profile from './components/Profile/Profile';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import NewPassword from './components/NewPassword/NewPassword';
import Test from "./components/Test/Test";
import Component404 from "./components/404/Component404";
import Navbar from "./components/Navbar/Navbar";

export const PATH = {
    login: '/login',
    registration: '/registration',
    profile: '/profile',
    Component404: '/404',
    passwordRecovery: '/passwordRecovery',
    newPassword: '/newPassword',
    test: '/test'
}


const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path={"/"} render={() => <Navbar />}/>
                <Route path={PATH.login} render={() => <Login/>}/>
                <Route path={PATH.registration} render={() => <Registration/>}/>
                <Route path={PATH.profile} render={() => <Profile/>}/>
                <Route path={PATH.Component404} render={() => <Component404/>}/>
                <Route path={PATH.passwordRecovery} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.newPassword} render={() => <NewPassword/>}/>
                <Route path={PATH.test} render={() => <Test/>}/>
                <Redirect from={'*'} to={"/404"}/>
            </Switch>
        </div>
    );
}

export default App;

