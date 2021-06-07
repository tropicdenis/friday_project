import React, {useCallback, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import style from './LogOut.module.css'
import {logoutTC} from "../../Redux/loginReducer";

export const LogOut= () => {
    const dispatch = useDispatch()
    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [dispatch])

    return <>
        <button className={style.logoutButton} onClick={logoutHandler}>LOGOUT</button>
    </>
}