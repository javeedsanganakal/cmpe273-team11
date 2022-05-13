import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="header_container">
        <div className="header_left">
          <Link to="/">
            <img
              src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
              alt="logo"
            />
          </Link>

          <h3>About</h3>
          <h3>Products</h3>
          <h3>For Teams</h3>
        </div>
        <div className="header_middle">
          <div className="header_search_container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header_right">
          <div className="header_right_container">
            {/* <SearchIcon /> */}

            <Avatar
              style={{
                cursor: "pointer",
              }}
            />
            <InboxIcon />
            <HelpIcon />
            
            <svg
              aria-hidden="true"
              className="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>


            <Link to="/auth">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
