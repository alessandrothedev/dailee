import React from 'react';
import './styles/navbar.scss';

const NavBar = () => {

    const date = new Date();
    const time = date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes();

    return (
        <div className='nav'>
            <h3 className='nav__logo'>dailee</h3>
            <h4>{time}</h4>
        </div>
    )
};

export default NavBar;
