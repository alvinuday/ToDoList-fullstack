import "../styles/DashboardLeft.css";
import NavLink from "./NavLink.jsx";
import { React, useState } from "react";
import Home from "../assets/Home.png";
import Stats from "../assets/stats.png";
import Projects from "../assets/projects.png";
import Chat from "../assets/chat.png";
import Calendar from "../assets/calendar.png";
import Setting from "../assets/setting.png";
import Logout from "../assets/logout.png";
import { useNavigate } from "react-router-dom";
export default function DashboardLeftNav() {
  let navigate = useNavigate();
  const [navLinks, setnavLinks] = useState([
    {
      logo: Home,
      label: "Overview",
    },
    {
      logo: Stats,
      label: "Stats",
    },
    {
      logo: Projects,
      label: "Projects",
    },
    {
      logo: Chat,
      label: "Stats",
    },
    {
      logo: Calendar,
      label: "Calendar",
    },
  ]);
  const [footerLinks, setfooterLinks] = useState([
    {
      logo: Setting,
      label: "Settings",
    },
    {
      logo: Logout,
      label: "Log Out",
    },
  ]);
  const signOut = () => {
    sessionStorage.clear();
    navigate("/", { replace: true });
    console.log("Sign Out");
  };
  return (
    <div className="leftBox">
      <div className="leftBoxUpper">
        <div className="logo">.taskez</div>
        <div className="navLinks">
          <NavLink navLinks={navLinks} />
        </div>
      </div>
      <div className="navFooter">
        <NavLink navLinks={footerLinks} signOut={signOut} />
      </div>
    </div>
  );
}
