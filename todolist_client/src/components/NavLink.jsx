import "../styles/NavLink.css";
import { React, useState } from "react";
export default function NavLink({ navLinks, signOut }) {
  return (
    <div className="NavLinkWrapper" onClick={signOut}>
      {navLinks.map((link, i) => (
        <div className="NavLink">
          <div className="NavLinkImage">
            <img src={link.logo} alt="Home" className="NavLinkImg" />
          </div>
          <div className="NavLinkLabel" id={`NavLink${i}`}>
            {link.label}
          </div>
        </div>
      ))}
    </div>
  );
}
