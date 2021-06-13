import React, { ChangeEvent, useState } from 'react';
import style from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { AppStateType } from "../../Redux/redux_store";
import { loginTC, setResponseErrorAC } from "../../Redux/loginReducer";
import { PATH } from "../../App";

export const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [typePassword, setTypePassword] = useState<string>('password')

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isLoggedIn)
    const responseError = useSelector<AppStateType, string>(state => state.login.responseError)

    /* if (isLoggedIn) {
        return <Redirect to={PATH.profile} />
    } */

    const setUserData = () => {
        dispatch(loginTC({ email, password, rememberMe }))
    }
    const onSetUpEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
        dispatch(setResponseErrorAC(""))
    }
    const onSetUpPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
        dispatch(setResponseErrorAC(""))
    }
    const onSetUpRememberMe = (event: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.currentTarget.checked)
    }
    const onClickTypePassword = () => {
        if (typePassword === 'password') {
            setTypePassword('text')
        } else if (typePassword === 'text') {
            setTypePassword('password')
        }
    }
    return (
        <div className={style.main}>
            <div className={style.mainBlock}>
                <div className={style.title}>
                    It-incubator
                </div>
                <div className={style.subTitle}>
                    Sign In
                </div>
                <div className={style.form}>
                    <div className={style.formInput}>
                        <input type="email" placeholder='Enter your email' onChange={onSetUpEmail} />
                    </div>
                    <div className={style.formInput}>
                        <input type={typePassword} placeholder='Enter your password' onChange={onSetUpPassword} />
                        <span className={style.photoEye} onClick={onClickTypePassword} />
                        <span className={style.formError}>{responseError}</span>
                    </div>
                    <div className={style.forgotPassword}>
                        <input type={"checkbox"} checked={rememberMe} onChange={onSetUpRememberMe} />RememberMe
                    </div>
                    <div>
                        <button className={style.loginButton} onClick={setUserData}>Login</button>
                    </div>
                </div>

                <div className={style.askAboutAccount}>
                    <span>Don’t have an account?</span>
                </div>
                <div className={style.singUp}>
                    <span>Sign Up</span>
                </div>
            </div>
        </div>
    );
}


