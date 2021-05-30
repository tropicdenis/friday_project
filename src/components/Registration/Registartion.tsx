import React from 'react';
import style from './Registartion.module.css';

const Registration = () => {
  return (
    <div className={style.main}>
      <div className={style.mainBlock}>
        <div className={style.title}>
          It-incubator
        </div>
        <div className={style.subTitle}>
          Sign Up
        </div>
        <form className={style.form}>
          <div className={style.formInput}>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className={style.formInput}>
            <input type="password" placeholder='Enter your password' />
          </div>
          <div className={style.formInput}>
            <input type="password" placeholder='Confirm your password' />
          </div>
          <div className={style.flexButtons}>
            <div >
              <button className={style.cancelButton}>Cancel</button>
            </div>
            <div>
              <button className={style.logisterButton}>Register</button>
            </div>
          </div>
        </form>


      </div>

    </div>
  );
}

export default Registration;
