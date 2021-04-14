import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>로그인</h1>
        <input ref={emailRef} placeholder="이메일" type="email" />
        <input ref={passwordRef} placeholder="비밀번호" type="password" />
        <button onClick={signIn} type="submit">
          로그인
        </button>
        <div className="signupScreen__check">
          <label>
            <input type="checkbox"></input>로그인 정보 저장
          </label>

          <span> 도움이 필요하신가요?</span>
        </div>

        <h4>
          <span className="signupScreen__gray">Netflix 회원이 아닌가요?</span>
          <spna onClick={register} className="signupScreen__link">
            지금 가입하세요.
          </spna>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
