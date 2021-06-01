import React from 'react';
import style from './Login.module.css';

const Login = () => {


  return (
    <div className={style.main}>
      <div className={style.mainBlock}>
        <div className={style.title}>
          It-incubator
        </div>
        <div className={style.subTitle}>
          Sign In
        </div>
        <form className={style.form}>
          <div className={style.formInput}>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className={style.formInput}>
            <input type="password" placeholder='Enter your password' />
          </div>
          <p className={style.forgotPassword}>
            <span>Forgot Password</span>
          </p>
          <div>
            <button className={style.loginButton}>Login</button>
          </div>
        </form>

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

export default Login;
