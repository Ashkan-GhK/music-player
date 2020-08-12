import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import '../styles/Navbar.css';

const Navbar = () =>  {
    return (
        <div className="navbar_container">
            <div className="leftColumn_container">
                <div className="socialMedias_container">
                    <FacebookIcon fontSize= "small"/>
                    <TwitterIcon  fontSize= "small" />
                    <InstagramIcon fontSize= "small" />
                    <YouTubeIcon fontSize= "small" />
                    <TelegramIcon fontSize= "small" />
    
                </div>
                <div className="search_container">
                    <SearchIcon />
                    <div className="search_input_container">
                        <input className="search_box" type="text" placeholder="search" />
                    </div>
                </div>
                <div className="rightColumn_container">
                    <h3><span>Listen Now</span></h3>
                    <h3>Log In</h3>
                    <h3>Sign Up</h3>

                </div>

            </div>
        </div>
    )
}

export default Navbar;
