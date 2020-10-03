import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/icon-hamburger.svg";
import CloseIcon from "../../assets/icon-close.svg";

function Header({ mobile }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div
      className={open === true && mobile === true ? "header__open" : "header"}
    >
      <img src={Logo} alt="" />
      {mobile ? (
        open ? (
          <div className="header__menuOpen">
            <img
              className="header__menu"
              src={CloseIcon}
              alt=""
              onClick={handleOpen}
            />

            <div className="header__linksOpen">
              <p>HOW WE WORK</p>
              <p>BLOG</p>
              <p>ACCOUNT</p>
              <p>VIEW PLANS</p>
            </div>
          </div>
        ) : (
          <img
            className="header__menu"
            src={MenuIcon}
            alt=""
            onClick={handleOpen}
          />
        )
      ) : (
        <div className="header__links">
          <p>HOW WE WORK</p>
          <p>BLOG</p>
          <p>ACCOUNT</p>
          <p>VIEW PLANS</p>
        </div>
      )}
    </div>
  );
}

export default Header;
