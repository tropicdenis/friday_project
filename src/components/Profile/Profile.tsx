import React, { useEffect } from 'react';
import style from './Profile.module.css';
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/redux_store";
import { isAuthTC } from '../../Redux/authReducer';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();

  const userData = useSelector<AppStateType>(state => state.login.dataLogin)
  const isAuth = useSelector<AppStateType>(state => state.isAuth.isAuth)


  const { token } = useParams<{ token: string }>();


  useEffect(() => {
    dispatch(isAuthTC());
  }, [])

  return (
    <div className={style.main}>
      {JSON.stringify(userData)}
    </div>
  );
}

export default Profile;
