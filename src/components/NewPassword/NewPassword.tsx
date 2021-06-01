import React from 'react';
import './NewPassword.css';
import {useDispatch} from "react-redux";
import {setRecoveryFlag} from "../../Redux/passwordRecoveryReducer";

const NewPassword = () => {
const dispatch = useDispatch();
dispatch(setRecoveryFlag(false))

  return (
      <div className="NewPassword">
          NewPassword
      </div>
  );
}

export default NewPassword;
