import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>로그인</h1>
        <input placeholder="이메일" type="email" />
        <input placeholder="비밀번호" type="password" />
        <button type="submit">로그인</button>
        <div className="signupScreen__check">
          <label>
            <input type="checkbox"></input>로그인 정보 저장
          </label>

          <span> 도움이 필요하신가요?</span>
        </div>

        <h4>
          <span className="signupScreen__gray">Netflix 회원이 아닌가요?</span>
          <spna className="signupScreen__link">지금 가입하세요.</spna>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
