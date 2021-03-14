import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import './Header.css';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__icon">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                    alt="airbnb"
                />
            </div>
            
            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
