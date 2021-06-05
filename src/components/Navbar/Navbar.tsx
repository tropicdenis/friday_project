import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';



const Navbar = () => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={"/registration"} activeClassName={s.activeLink}>Registration</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/login"} activeClassName={s.activeLink}>Login</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/profile"} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/passwordRecovery"} activeClassName={s.activeLink}>PasswordRecovery</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={`/newPassword/`} activeClassName={s.activeLink}>NewPassword</NavLink>
            </div>
        </nav>

    );
}


export default Navbar