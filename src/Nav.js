import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

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
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
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
          <img
            onClick={() => history.push("/profile")}
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
