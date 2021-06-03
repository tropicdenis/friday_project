import React, { useEffect } from 'react';
import './Profile.css';
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/redux_store";

const Profile = () => {
  const userData = useSelector<AppStateType>(state => state.login.dataLogin)

  return (
    <div className="Profile">
      {JSON.stringify(userData)}
    </div>
  );
}

export default Profile;
