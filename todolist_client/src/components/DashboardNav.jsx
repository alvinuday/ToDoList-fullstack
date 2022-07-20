import "../styles/DashboardNav.css";
import Search from "../assets/search.png";
import { useState } from "react";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import currentUserImage from "../assets/currentUser.png";
import User from "./User";
export default function DashboardNav() {
  const [userList, setuseList] = useState([
    {
      img: user1,
      name: "user1",
    },
    {
      img: user2,
      name: "user2",
    },
    {
      img: user3,
      name: "user3",
    },
    {
      img: user4,
      name: "user4",
    },
    {
      img: user5,
      name: "user5",
    },
  ]);
  const [currentUser, setcurrentUser] = useState({
    img: currentUserImage,
    name: "Alvin",
  });
  return (
    <div className="nav">
      <div className="search">
        <img src={Search} alt="search" id="searchImage" />
        <input type="text" placeholder="Search" className="searchText" />
      </div>
      <div className="userDisplay">
        {userList.map((user) => (
          <User img={user.img} />
        ))}
      </div>
      <div className="profile">
        <span className="greeting">Hi {currentUser.name}</span>
        <img src={currentUser.img} id="currentUserPic" />
      </div>
    </div>
  );
}
