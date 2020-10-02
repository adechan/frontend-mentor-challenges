import React from "react";
import "./FooterCard.css";

function FooterCard({ title, links }) {
  return (
    <div className="footerCard">
      <p>{title}</p>
      <div className="footerCard__links">
        {links?.map((link) => (
          <p>{link}</p>
        ))}
      </div>
    </div>
  );
}

export default FooterCard;
