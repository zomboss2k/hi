import React from "react";
import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";

const Nav = ({
  authToken,
  minimal,
  setShowModal,
  showModal,
  setIsRegister,
}) => {
  const handleClick = () => {
    setShowModal(true);
    setIsRegister(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Đăng nhập
        </button>
      )}
    </nav>
  );
};
export default Nav;
