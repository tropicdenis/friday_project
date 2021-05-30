import React from 'react';
import style from './PasswordRecovery.module.css';

const PasswordRecovery = () => {
  return (
    <div className={style.main}>
      <div className={style.mainBlock}>
        <div className={style.title}>
          It-incubator
      </div>
        <div className={style.subTitle}>
          Forgot your password?
      </div>
        <form className={style.form}>
          <div className={style.formInput}>
            <input type="email" placeholder='Enter your email' />
          </div>
          <p className={style.textAfterInput}>
            Enter your email address and we will send you further instructions
          </p>
          <div>
            <button className={style.mainButton}>Send Instructions</button>
          </div>
        </form>
        <div className={style.askAboutAccount}>
          <span>Did you remember your password?</span>
        </div>
        <div className={style.tryLogin}>
          <span>Try logging in</span>
        </div>
      </div>

    </div>
  );
}

export default PasswordRecovery;
