import React from 'react';
import './styles/navbar.scss';

const NavBar = () => {

    const date = new Date();
    const time = date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();

    return (
        <div className='nav'>
            <h3 className='nav__logo'>dailee</h3>
            <p>{time}</p>
        </div>
    )
};

export default NavBar;
