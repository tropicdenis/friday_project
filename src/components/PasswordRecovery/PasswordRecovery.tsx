import React, {ChangeEvent, useState} from 'react';
import style from './PasswordRecovery.module.css';
import {passwordRecoveryThunk} from "../../Redux/passwordRecoveryReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux_store";
import {Redirect} from "react-router-dom";

const PasswordRecovery = () => {
    const isRecovered = useSelector<AppStateType, boolean>(state => state.passwordRecovery.isRecovered)
    const responseError = useSelector<AppStateType, string>(state => state.passwordRecovery.responseError)
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onSendEmail = () => {
        const recoveryData = {
            email: email,
            from: 'test-front-admin <ai73a@yandex.by>)',
            message: `<div style="background-color: lime; padding: 15px"> 
                        password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
                      </div>`
        };
        dispatch(passwordRecoveryThunk(recoveryData))
    }
    if (isRecovered) {
        debugger
        return (<Redirect to={'/newPassword'}/>)
    }
    const onRedirectToLogin = () => {
        debugger
        return (<Redirect to={'/login'}/>)
    }

    return (
        <div className={style.main}>
            <div className={style.mainBlock}>
                <div className={style.title}>
                    It-incubator
                </div>
                <div className={style.subTitle}>
                    Forgot your password?
                </div>
                <div className={style.form}>
                    <div className={style.formInput}>
                        <input type="email" placeholder='Enter your email' onChange={onChangeEmail} value={email}/>
                        <span className={style.formError}>{responseError && responseError}</span>
                    </div>
                    <p className={style.textAfterInput}>
                        Enter your email address and we will send you further instructions
                    </p>
                    <div>
                        <button className={style.mainButton} onClick={onSendEmail}>Send Instructions</button>
                    </div>
                </div>
                <div className={style.askAboutAccount} onClick={onRedirectToLogin}>
                    <span>Did you remember your password?</span>
                </div>
                <div className={style.tryLogin} onClick={onRedirectToLogin}>
                    <span>Try logging in</span>
                </div>
            </div>

        </div>
    );
}

export default PasswordRecovery;
