import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
import { auth } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faGift,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };
  useEffect(() => {
    //scroll을 내리면 navbar bg가 black으로 변경
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__left">
          <img
            onClick={() => history.push("/")}
            className="nav__logo"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt="main_logo"
          />
          <ul className="nav__left-navItems">
            <li>홈</li>
            <li>TV프로그램</li>
            <li>영화</li>
            <li>넷플릭스 오리지널</li>
            <li>최신 등록 콘텐츠</li>
            <li>내가 찜한 콘텐츠</li>
          </ul>
        </div>
        <div className="nav__right">
          <FontAwesomeIcon icon={faSearch} color="white" />
          <div className="nav__right-kids">키즈</div>
          <FontAwesomeIcon icon={faGift} color="white" />
          <FontAwesomeIcon icon={faBell} color="white" />
          <div className="nav__right-profile" onClick={handleDropdown}>
            <img
              onClick={handleDropdown}
              className="nav__avatar"
              src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2mdn_92ruEqx0QzXDv947nXRyeamVpcKT4xbR6N-51JGWihqgKLLIX9gO_E319FW3Qoqff4ujjappyQ8uskyFS6Q.png?r=a41"
              alt="avatar"
            />

            <FontAwesomeIcon icon={faCaretDown} color="white" />
            {dropdown && (
              <div
                className="nav__account-dropdown"
                onMouseLeave={handleDropdown}
              >
                <ul className="nav__dropdown-profiles">
                  {/* <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2mdn_92ruEqx0QzXDv947nXRyeamVpcKT4xbR6N-51JGWihqgKLLIX9gO_E319FW3Qoqff4ujjappyQ8uskyFS6Q.png?r=a41"
                      alt=""
                    />
                    <p>Profile 1</p>
                  </li> */}
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYgoIFuP4_E0zjNm4v8w6iCy69xVG0gEJgeLjbl7VR3GBolfveZOeKR0RXL1sHzRdidE4Prff-FSWhZmRICew4Zm9Q.png?r=f71"
                      alt=""
                    />
                    <p>Profile 2</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYfwTxmicFHiE-E3haGy5fndgVeLFsF__2XdxoXTGyNdahQG3Zoix8YpO5Ij7oHpiGr0S8GJszzKUltRYtg42mPEsQ.png?r=b97"
                      alt=""
                    />
                    <p>Profile 3</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_5NlU6oiEjm2-0Nq0k3GkoO5x3lSaB4zMq2ggg-NHsLQa5QTAGV3J_Gn2C27_1zzCXwkBxggt4Syl00Z2NqFsQnQ.png?r=fcd"
                      alt=""
                    />
                    <p>키즈</p>
                  </li>
                
                </ul>
                <div className="nav__dropdown-manage">
                  <p onClick={() => history.push("/manage")}>
                    프로필 관리
                  </p>
                </div>
                <ul className="nav__dropdown-account">
                  <li onClick={() => history.push("/profile")}>계정</li>
                  <li>고객 센터</li>
                  <li onClick={() => auth.signOut()}>로그아웃</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
