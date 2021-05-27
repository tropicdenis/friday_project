import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Login from "./components/Login/Login";
import Registration from './components/Registration/Registartion';
import Profile from './components/Profile/Profile';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import NewPassword from './components/NewPassword/NewPassword';
import Test from "./components/Test/Test";
import Component404 from "./components/404/Component404";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/404'} render={() => <Component404/>}/>
            <Route path={'/passwordRecovery'} render={() => <PasswordRecovery/>}/>
            <Route path={'/newPassword'} render={() => <NewPassword/>}/>
            <Route path={'/test'} render={() => <Test/>}/>
        </div>
    );
}

export default App;
