import React from "react";
import "./ProfileManage.css";
import Nav from "../Nav";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";

function ProfileManage() {
  return (
    <div className="profileManage">
      <div className="profileManage__nav">
        <Nav />
      </div>
      <div className="profileManage__body">
        <h1 className="profileManage__title">프로필 관리</h1>
        <div className="profileManage__profiles">
          <div
            className="profileManage__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2mdn_92ruEqx0QzXDv947nXRyeamVpcKT4xbR6N-51JGWihqgKLLIX9gO_E319FW3Qoqff4ujjappyQ8uskyFS6Q.png?r=a41)",
            }}
          >
            <div className="profileManage__avatarOpacity" />
            <FontAwesomeIcon icon={faPen} color="white" />
            <h3>Profile 1</h3>
          </div>

          <div
            className="profileManage__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYgoIFuP4_E0zjNm4v8w6iCy69xVG0gEJgeLjbl7VR3GBolfveZOeKR0RXL1sHzRdidE4Prff-FSWhZmRICew4Zm9Q.png?r=f71)",
            }}
          >
            <div className="profileManage__avatarOpacity" />
            <FontAwesomeIcon icon={faPen} color="white" />
            <h3>Profile 2</h3>
          </div>

          <div
            className="profileManage__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYfwTxmicFHiE-E3haGy5fndgVeLFsF__2XdxoXTGyNdahQG3Zoix8YpO5Ij7oHpiGr0S8GJszzKUltRYtg42mPEsQ.png?r=b97)",
            }}
          >
            <div className="profileManage__avatarOpacity" />
            <FontAwesomeIcon icon={faPen} color="white" />
            <h3>Profile 3</h3>
          </div>

          <div
            className="profileManage__profile"
            style={{
              backgroundImage:
                "url(https://occ-0-325-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_5NlU6oiEjm2-0Nq0k3GkoO5x3lSaB4zMq2ggg-NHsLQa5QTAGV3J_Gn2C27_1zzCXwkBxggt4Syl00Z2NqFsQnQ.png?r=fcd)",
            }}
          >
            <div className="profileManage__avatarOpacity" />
            <FontAwesomeIcon icon={faPen} color="white" />
            <h3>키즈</h3>
          </div>
          <div
            className="profileManage__profile"
            style={{ backgroundColor: "black" }}
          >
            <div className="profileManage__avatarOpacity" />
            <FontAwesomeIcon icon={faPlus} color="white" />
            <h3>프로필 추가</h3>
          </div>
        </div>
      </div>
      <div className="profileManage__footer">
        <Footer />
      </div>
    </div>
  );
}

export default ProfileManage;
