import React, { useEffect } from 'react';
import style from './Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/redux_store";
import { isAuthTC } from '../../Redux/authReducer';
import { Redirect } from 'react-router-dom';
import { PATH } from '../../App';


type dataLoginType = {
  _id: string,
  email: string,
  name: string
  avatar: string | null,
  publicCardPacksCount: number,
  created: string
  updated: string
  isAdmin: boolean
  verified: boolean
  rememberMe: boolean
  error: string
}

const Profile = () => {

  const dispatch = useDispatch();

  const userData = useSelector<AppStateType, dataLoginType>(state => state.login.dataLogin)
  const isAuth = useSelector<AppStateType, boolean>(state => state.login.isLoggedIn)


  useEffect(() => {
    if (!userData.created) {
      dispatch(isAuthTC());
    }

  }, [])

  if (!isAuth) {
    return <Redirect to={PATH.login} />
  }

  return (
    <div className={style.main}>
      {JSON.stringify(userData)}
    </div>
  );
}

export default Profile;


