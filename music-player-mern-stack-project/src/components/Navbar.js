import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () =>  {
    return (
        <div className="navbar_container">
            <div className="leftColumn_container">
                <div className="socialMedias_container">
                    <h5>f  t  in  Y  T</h5>
                </div>
                <div className="search_container">
                    <SearchIcon />
                    <div className="search_input_container">
                        <input type="text" placeholder="search" />
                    </div>
                </div>
                <div className="rightColumn_container">
                    <h3>Listen Now</h3>
                    <h3>Log In</h3>
                    <h3>Sign Up</h3>

                </div>

            </div>
        </div>
    )
}

export default Navbar;
