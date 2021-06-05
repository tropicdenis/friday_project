import React, { ChangeEvent, useState } from 'react';
import style from './NewPassword.module.css';
import { useDispatch, useSelector } from "react-redux";
import { setNewPasswordTC, setRecoveryFlag } from "../../Redux/passwordRecoveryReducer";
import { Redirect, useParams } from 'react-router-dom';
import { AppStateType } from '../../Redux/redux_store';
import { PATH } from '../../App';

const NewPassword = () => {

  const isInfo = useSelector<AppStateType, boolean>(state => state.passwordRecovery.info)


  const dispatch = useDispatch();
  dispatch(setRecoveryFlag(false))


  const { token } = useParams<{ token: string }>()
  const [newPassword, setNewPassword] = useState('')


  const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.currentTarget.value);
  }

  const onChangeNewPasswordAPI = () => {
    dispatch(setNewPasswordTC({ password: newPassword, resetPasswordToken: token }))
  }

  if (!isInfo) {
    return <Redirect to={PATH.login} />
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
            <input type="password" placeholder='Enter your new password' value={newPassword} onChange={onChangeNewPassword} />
            <span className={style.formError}></span>
          </div>
          <p className={style.textAfterInput}>
            Create new password and we will send you further instructions to email
            </p>
          <div>
            <button onClick={onChangeNewPasswordAPI} className={style.mainButton}>Create new password</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NewPassword;
