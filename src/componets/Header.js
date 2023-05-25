import React from "react";
import AccountCircle from "./AccountCircle";
import MyImage from "../Asset/icons.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path
            className="logo-img"
            d="M27,6H3C1.895,6,1,6.895,1,8v14c0,1.105,0.895,2,2,2h24c1.105,0,2-0.895,2-2V8C29,6.895,28.105,6,27,6z M20,10h2v2h-2V10z M16,10h2v2h-2V10z M20,14v2h-2v-2H20z M12,10h2v2h-2V10z M16,14v2h-2v-2H16z M8,10h2v2H8V10z M12,14v2h-2v-2H12z M4,10h2v2H4V10z M4,14h4v2H4V14z M6,20H4v-2h2V20z M22,20H8v-2h14V20z M26,20h-2v-2h2V20z M26,16h-4v-2h4V16z M26,12h-2v-2h2V12z"
          ></path>
        </svg>
        <span className="logo-text">typeing-speed</span>
      </div>
      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
};

export default Header;
