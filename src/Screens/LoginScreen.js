import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="bg"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          로그인
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen className="loginScreen__body2"/>
        ) : (
          <>
            <h1>
              영화, TV 프로그램을 <br />
              무제한으로.{" "}
            </h1>
            <h2>
              다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </h2>
            <h3>
              시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="이메일 주소" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  시작하기{" "}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
