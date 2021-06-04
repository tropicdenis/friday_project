import React, { ChangeEvent, useState } from 'react';
import style from './NewPassword.module.css';
import { useDispatch } from "react-redux";
import { setRecoveryFlag } from "../../Redux/passwordRecoveryReducer";

const NewPassword = () => {
  const dispatch = useDispatch();
  dispatch(setRecoveryFlag(false))


  const [newPassword, setNewPassword] = useState('')


  const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.currentTarget.value);
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
            <button className={style.mainButton}>Create new password</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NewPassword;
