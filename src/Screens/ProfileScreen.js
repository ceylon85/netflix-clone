import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  console.log("auth user===> ", user);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1 className="profileScreen__title">계정</h1>
        <div className="profileScreen__info">
          <div className="profileScreen__membership">
            <img
              className="profileScreen__avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="avatar"
            />
            <h3 className="profileScreen__membershipText">
              멤버십 & 결제 정보
            </h3>
            <button>프로필 관리</button>
          </div>
          <div className="profileScreen__userInfo">
            <div className="profileScreen__userInfoRow">
              <h2>{user.email} </h2>
              <p className="profileScreen__userInfoChange">이메일 주소 변경</p>
            </div>
            <div className="profileScreen__userInfoRow">
              <h2>비밀번호: ******</h2>
              <p className="profileScreen__userInfoChange">비밀번호 변경</p>
            </div>
            <div className="profileScreen__userInfoRow">
              <h2>전화번호: 010-0000-0000</h2>
              <p className="profileScreen__userInfoChange">전화번호 변경</p>
            </div>
            <div className="profileScreen__card">
              <h2 className="profileScreen__cardInfo1">신용 카드</h2>
              <h2 className="profileScreen__cardInfo2">
                {" "}
                VISA **** **** **** 4242
              </h2>
            </div>
            {user.subscription && (
              <div className="profileScreen__paymentInfo">
                <h3 className="profileScreen__paymentInfo1">
                  다음 결제 날짜는{" "}
                  {new Date(
                    user.subscription?.current_period_end * 1000
                  ).toLocaleDateString()}{" "}
                  입니다.
                </h3>
                <h4 className="profileScreen__paymentInfo2">결제정보 변경</h4>
              </div>
            )}
          </div>
        </div>
        <div className="profileScreen__details">
          <div className="profileScreen__plans">
            <h3>
              원하는 멤버십을 선택하세요.
              {user.subscription &&
                `(현재 멤버십: ${
                  user.subscription?.role.charAt(0).toUpperCase() +
                  user.subscription?.role.slice(1)
                })`}
            </h3>

            <PlanScreen />
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
  );
}

export default ProfileScreen;
