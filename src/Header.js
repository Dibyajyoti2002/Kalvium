import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Shield from "./images/shield.png";
import Man from "./images/man.png"
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


function Header() {
    return (
        <div className="Header">
            <div className="header_left">
                <img src={Shield} alt="logo" />

                <div className="header_search">
                    <SearchIcon style={{backgroundColor:"#eef3f8"}}/>
                    <input type="text" placeholder="Search your name"/>
                </div>

            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={NotificationsActiveIcon} title="Notifications" />
                <HeaderOption avatar={Man} title="My Account" />
            </div>
        </div>
    );
    }

export default Header;