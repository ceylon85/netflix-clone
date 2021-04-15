import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1 className="profileScreen__title">계정</h1>
        <div className="profileScreen__info">
          <img
            className="profileScreen__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">

                <h3>요금제</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
