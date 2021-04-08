import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <p>질문이 있으신가요? 문의: 00-308-321-0058</p>
      </div>
      <div className="footer__VerticalCol">
        <div className="footer__Col">
          <ul className="footer__ColList">
            <li>자주 묻는 질문</li>
            <li>투자 정보(IR)</li>
            <li>개인정보</li>
            <li>속도 테스트</li>
          </ul>
        </div>
        <div className="footer__ColSpacer"></div>
        <div className="footer__Col">
          <ul className="footer__ColList">
            <li>고객 센터</li>
            <li>입사 정보</li>
            <li>쿠키 설정</li>
            <li>법적 고지</li>
          </ul>
        </div>
        <div className="footer__ColSpacer"></div>
        <div className="footer__Col">
          <ul className="footer__ColList">
            <li>계정</li>
            <li>Netflix 지원 디바이스</li>
            <li>회사 정보</li>
            <li>Netflix 오리지널</li>
          </ul>
        </div>
        <div className="footer__ColSpacer"></div>
        <div className="footer__Col">
          <ul className="footer__ColList">
            <li>미디어 센터</li>
            <li>이용 약관</li>
            <li>문의하기</li>
          </ul>
        </div>
        <div className="footer__ColSpacer"></div>
      </div>

      <div className="footer__endLine">
        <p>Netflix 대한민국</p>
        <div className="footer__copyright">
        <p>© 1997-2021 Netflix Clone </p>
        <a href="https://github.com/ceylon85/react-netflix-clone">
          <img
            className="git__logo"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="git"
            title="go github"
          />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
