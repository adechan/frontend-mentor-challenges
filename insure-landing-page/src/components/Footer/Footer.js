import React from "react";
import "./Footer.css";

import Logo from "../../assets/logo.svg";
import FacebookIcon from "../../assets/icon-facebook.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";
import PinterestIcon from "../../assets/icon-pinterest.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";

import FooterCard from "../FooterCard/FooterCard";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__description">
        <img src={Logo} alt="" />

        <div className="footer__socials">
          <img src={FacebookIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={PinterestIcon} alt="" />
          <img src={InstagramIcon} alt="" />
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__cards">
        <FooterCard
          title="OUR COMPANY"
          links={["HOW WE WORK", "WHY INSURE?", "VIEW PLANS", "REVIEWS"]}
        />
        <FooterCard
          title="HELP ME"
          links={["FAQ", "TERMS OF USE", "PRIVACY POLICY", "COOKIES"]}
        />
        <FooterCard title="CONTACT" links={["SALES", "SUPPORT", "LIVE CHAT"]} />
        <FooterCard title="OTHERS" links={["CAREERS", "PRESS", "LICENSES"]} />
      </div>
    </div>
  );
}

export default Footer;
