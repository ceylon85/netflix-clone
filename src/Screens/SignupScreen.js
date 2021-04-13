import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return <div className="signupScreen">
      <form>
          <h1>로그인</h1>
          <input placeholder="이메일" type="email"/>
          <input placeholder="비밀번호" type="password"/>
          <button type="submit">로그인</button>
      </form>
  </div>;
}

export default SignupScreen;
